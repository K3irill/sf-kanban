import React, { PropsWithChildren } from 'react'
import styles from './TaskBlock.module.scss'
import cn from 'classnames'
import { dataIssuesType } from '../../../types/data'
import TaskItem from '../TaskItem/TaskItem'

type TaskBlockProps = {
	blockName: string
	issues: dataIssuesType[]
}

//---------------------------
const TaskBlock = ({
	blockName,
	issues,
}: PropsWithChildren<TaskBlockProps>) => {
	return (
		<div className={cn(styles['task-block'])}>
			<div className={styles['task-block__header']}>
				<h3>{blockName}</h3>
			</div>
			<div className={styles['task-block__tasks']}>
				{issues.map(task => (
					<TaskItem data={task} />
				))}
			</div>
			<div className={styles['task-block__footer']}>
				<button>Add card</button>
			</div>
		</div>
	)
}

export default TaskBlock
