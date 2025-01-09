import React, { PropsWithChildren } from 'react'
import styles from './TaskBlock.module.scss'
import cn from 'classnames'

type TaskBlockProps = {
	blockName: string
}

//---------------------------
const TaskBlock = ({
	blockName,
	children,
}: PropsWithChildren<TaskBlockProps>) => {
	return (
		<div className={styles['task-block']}>
			<div className={styles['task-block__header']}>
				<h3>{blockName}</h3>
			</div>
			<div className={styles['task-block__task']}>{children}</div>
			<div className={styles['task-block__footer']}>
				<button>Add card</button>
			</div>
		</div>
	)
}

export default TaskBlock
