import React from 'react'
import styles from './TaskItem.module.scss'
import { dataIssuesType } from '../../../types/data'

type TaskItemProps = {
	data: dataIssuesType
}
//--------------------------
const TaskItem = ({ data }: TaskItemProps) => {
	return <div className={styles['task-item']}>{data.name}</div>
}

export default TaskItem
