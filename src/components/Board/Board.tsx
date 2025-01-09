import styles from './Board.module.scss'
import cn from 'classnames'
import TaskBlock from '../Task/TaskBlock/TaskBlock'
import { useDataTasks } from '../../context/data-tasks-context'

const Board = () => {
	const { dataTasks } = useDataTasks()
	return (
		<div className={styles.board}>
			<div className={cn(styles.board__container, '__container')}>
				{dataTasks.map((block, index) => (
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
