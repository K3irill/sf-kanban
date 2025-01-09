import React from 'react'
import styles from './Board.module.scss'
import cn from 'classnames'

const Board = () => {
	return (
		<div className={styles.board}>
			<div className={cn(styles.board__container, '__container')}>Board</div>
		</div>
	)
}

export default Board
