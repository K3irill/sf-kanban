import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { useDataTasks } from '../../../context/data-tasks-context'
import styles from './TaskDetails.module.scss'
import cn from 'classnames'
import saveTaskToLocalStorage from '../../../utils/localStorage'

const TaskDetails = () => {
	const navigate = useNavigate()
	const location = useLocation()
	const { dataTasks, setDataTasks } = useDataTasks()
	const [descriptionFocus, setDescriptionFocus] = useState(false)
	const [description, setDescription] = useState('')

	const taskId = location.pathname.replace(/[^0-9]/g, '')

	const currentTask = dataTasks
		.flatMap(block => block.issues)
		.find(task => task.id === taskId)

	useEffect(() => {
		if (currentTask) {
			setDescription(currentTask.description || '')
		}
	}, [currentTask])

	if (!currentTask) {
		return <div>Task not found</div>
	}

	const handleBlur = () => {
		setDataTasks(prev => {
			const updateTask = prev.map(block => ({
				...block,
				issues: block.issues.map(task =>
					task.id === currentTask.id
						? { ...task, description: description }
						: task
				),
			}))
			saveTaskToLocalStorage(updateTask)
			return updateTask
		})
		setDescriptionFocus(false)
	}

	const handleFocus = () => {
		setDescriptionFocus(true)
	}

	return (
		<div className={styles['task-details']}>
			<div className={cn(styles['task-details__container'], '__container')}>
				<h1>{currentTask.name}</h1>
				<input
					onBlur={handleBlur}
					onFocus={handleFocus}
					onChange={e => setDescription(e.target.value)}
					className={styles['task-details__input-description']}
					value={description}
					placeholder='This task has no description'
				/>
				{descriptionFocus && <button onClick={handleBlur}>Submit</button>}
				<button
					className={styles['task-details__btn-close']}
					onClick={() => navigate('/')}
				>
					X
				</button>
			</div>
		</div>
	)
}

export default TaskDetails
