import React from 'react'
import styles from './Board.module.scss'
import cn from 'classnames'
import TaskBlock from '../Task/TaskBlock/TaskBlock'
import { dataMock } from '../../data'

const Board = () => {
	return (
		<div className={styles.board}>
			<div className={cn(styles.board__container, '__container')}>
				{dataMock.map((block, index) => (
					<TaskBlock
						key={index}
						blockName={block.title}
						issues={block.issues}
					/>
				))}
			</div>
		</div>
	)
}

export default Board
