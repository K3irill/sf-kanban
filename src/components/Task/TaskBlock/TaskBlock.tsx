import React, { PropsWithChildren, useRef, useState } from 'react'
import styles from './TaskBlock.module.scss'
import cn from 'classnames'
import { dataIssuesType } from '../../../types/data'
import TaskItem from '../TaskItem/TaskItem'
import { useDataTasks } from '../../../context/data-tasks-context'
import saveTaskToLocalStorage from '../../../utils/localStorage'

type TaskBlockProps = {
	blockName: string
	issues: dataIssuesType[]
}

const TaskBlock = ({
	blockName,
	issues,
}: PropsWithChildren<TaskBlockProps>) => {
	const [isCreating, setCreating] = useState<boolean>(false)
	const [isReplacing, setReplacing] = useState<boolean>(false)
	const { dataTasks, setDataTasks } = useDataTasks()
	const [taskInputValue, setTaskInputValue] = useState('')
	const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null)
	const formRef = useRef<HTMLFormElement | null>(null)

	const toggleAdding = () => {
		if (blockName === 'backlog') {
			setCreating(prev => !prev)
		} else {
			setReplacing(prev => !prev)
		}
	}

	const addTaskBySubmit = (
		e: React.FormEvent,
		taskName?: string | null,
		taskDescription?: string | null
	) => {
		e.preventDefault()
		if (taskName && taskName.trim()) {
			const newTask = {
				id: String(Date.now()),
				name: taskName,
				description: taskDescription || '',
			}

			setDataTasks(prev => {
				const updatedDataTasks = prev.map(block =>
					block.title === 'backlog'
						? {
								...block,
								issues: [...block.issues, newTask],
						  }
						: block
				)
				saveTaskToLocalStorage(updatedDataTasks)
				return updatedDataTasks
			})
			setTaskInputValue('')
			setCreating(false)
		}
	}

	const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedTaskId(e.target.value)
	}

	const handleReplaceTask = () => {
		if (!selectedTaskId) return

		setDataTasks(prev => {
			const updatedDataTasks = prev.map(block => {
				if (block.issues.some(task => task.id === selectedTaskId)) {
					return {
						...block,
						issues: block.issues.filter(task => task.id !== selectedTaskId),
					}
				}

				if (block.title === blockName) {
					const taskToMove = prev
						.flatMap(b => b.issues)
						.find(task => task.id === selectedTaskId)

					return {
						...block,
						issues: taskToMove ? [...block.issues, taskToMove] : block.issues,
					}
				}
				return block
			})

			saveTaskToLocalStorage(updatedDataTasks)

			return updatedDataTasks
		})

		setReplacing(false)
		setSelectedTaskId(null)
	}

	const replaceBlock = dataTasks.find(block => block.title === blockName)
		?.replaceFrom
		? dataTasks.find(
				block =>
					block.title ===
					dataTasks.find(b => b.title === blockName)?.replaceFrom
		  )?.issues
		: []

	const buttonClasses = cn(styles['task-block__footer-button'], {
		[styles['button-active']]: isCreating || isReplacing,
	})

	return (
		<div className={cn(styles['task-block'])}>
			<div className={styles['task-block__header']}>
				<h3>{blockName}</h3>
			</div>
			<div className={styles['task-block__tasks']}>
				{issues.map(task => (
					<TaskItem key={task.id} data={task} />
				))}
				{isCreating && (
					<form
						ref={formRef}
						onSubmit={event => addTaskBySubmit(event, taskInputValue)}
					>
						<input
							value={taskInputValue}
							onChange={e => setTaskInputValue(e.target.value)}
							className={styles['task-block__task-input']}
							type='text'
							placeholder='Enter task title'
						/>
					</form>
				)}
				{isReplacing && replaceBlock && (
					<>
						<select
							value={selectedTaskId || ''}
							onChange={handleSelectChange}
							className={styles['task-block__select']}
						>
							<option value='' disabled>
								Select a task
							</option>
							{replaceBlock.map(task => (
								<option
									className={styles['task-block__option']}
									key={task.id}
									value={task.id}
								>
									{task.name}
								</option>
							))}
						</select>
						<button
							className={styles['task-block__move-button']}
							onClick={handleReplaceTask}
						>
							Move Task
						</button>
					</>
				)}
			</div>
			<div className={styles['task-block__footer']}>
				{blockName === 'backlog' ? (
					<button
						className={buttonClasses}
						onClick={() => {
							formRef.current?.dispatchEvent(
								new Event('submit', { cancelable: true, bubbles: true })
							)
							toggleAdding()
						}}
					>
						{!isCreating ? '+ Add card' : 'Submit'}
					</button>
				) : (
					<button
						disabled={replaceBlock?.length < 1}
						className={buttonClasses}
						onClick={toggleAdding}
					>
						{!isReplacing ? '+ Add card' : 'Cancel'}
					</button>
				)}
			</div>
		</div>
	)
}

export default TaskBlock
