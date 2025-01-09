import React from 'react'
import styles from './TaskItem.module.scss'
import { dataIssuesType } from '../../../types/data'
import { useNavigate } from 'react-router-dom'

type TaskItemProps = {
	data: dataIssuesType
}

const TaskItem = ({ data }: TaskItemProps) => {
	const navigate = useNavigate()

	const handleClick = () => {
		navigate(`/tasks/${data.id}`)
	}

	return (
		<div onClick={handleClick} className={styles['task-item']}>
			{data.name}
		</div>
	)
}

export default TaskItem
