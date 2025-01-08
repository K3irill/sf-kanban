import React, { useState } from 'react'
import styles from './UserElement.module.scss'
import cn from 'classnames'
//------------------------------
const UserElement = () => {
	const [isUserModalOpen, setUserModalOpen] = useState<boolean>(false)

	return (
		<div
			onClick={() => setUserModalOpen(prev => !prev)}
			className={styles['user-element']}
		>
			<img
				className={styles['user-avatar']}
				src='/images/user-default-avatar.png'
				alt='user-avatar'
			/>
			<button
				className={cn(styles['open-modal-btn'], {
					[styles['open-modal-btn--active']]: isUserModalOpen,
				})}
			>
				<img src='/icons/arrow-down.svg' alt='open' />
			</button>
		</div>
	)
}

export default UserElement
