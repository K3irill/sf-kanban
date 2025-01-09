import React from 'react'
import cn from 'classnames'

import styles from './Footer.module.scss'
import { useDataTasks } from '../../context/data-tasks-context'

//---------------------------------------
const Footer = () => {
	const { dataTasks } = useDataTasks()
	const totalTask = dataTasks.flatMap(block => block.issues).length
	const finishedTask = dataTasks
		.filter(block => block.title === 'finished')
		.flatMap(block => block.issues).length
	console.log(totalTask)
	return (
		<div className={styles.footer}>
			<div className={cn(styles.footer__container, '__container')}>
				<p>
					Active tasks: <span>{totalTask - finishedTask}</span>
				</p>
				<p>
					Finished tasks: <span>{finishedTask}</span>
				</p>
			</div>
		</div>
	)
}

export default Footer
