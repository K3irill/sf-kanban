import React, { PropsWithChildren, useState } from 'react'
import styles from './TaskBlock.module.scss'
import cn from 'classnames'
import { dataIssuesType } from '../../../types/data'
import TaskItem from '../TaskItem/TaskItem'
import { useDataTasks } from '../../../context/data-tasks-context'

type TaskBlockProps = {
	blockName: string
	issues: dataIssuesType[]
}

const TaskBlock = ({
	blockName,
	issues,
}: PropsWithChildren<TaskBlockProps>) => {
	const [isCreating, setCreating] = useState<boolean>(false)
	const { dataTasks, setDataTasks } = useDataTasks()
	const [taskInputValue, setTaskInputValue] = useState('')

	const toggleCreating = () => {
		if (blockName === 'backlog') {
			setCreating(prev => !prev)
		}
	}

	const addTaskBySubmit = (e: React.FormEvent) => {
		e.preventDefault()
		if (!taskInputValue.trim()) return

		setDataTasks(prev =>
			prev.map(block =>
				block.title === 'backlog'
					? {
							...block,
							issues: [
								...block.issues,
								{
									id: String(Date.now()),
									name: taskInputValue,
									description: '',
								},
							],
					  }
					: block
			)
		)
		setTaskInputValue('')
		setCreating(false)
		console.log(dataTasks)
	}

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
					<form onSubmit={addTaskBySubmit}>
						<input
							value={taskInputValue}
							onChange={e => setTaskInputValue(e.target.value)}
							className={styles['task-block__task-input']}
							type='text'
							placeholder='Enter task title'
						/>
					</form>
				)}
			</div>
			<div className={styles['task-block__footer']}>
				<button onClick={toggleCreating}>
					{!isCreating ? 'Add card' : 'Cancel'}
				</button>
			</div>
		</div>
	)
}

export default TaskBlock
