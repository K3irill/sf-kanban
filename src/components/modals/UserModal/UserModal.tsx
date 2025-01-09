import React from 'react'
import styles from './UserModal.module.scss'

const UserModal = () => {
	return (
		<div className={styles['user-modal']}>
			<button>Profile</button>
			<button>Log out</button>
		</div>
	)
}

export default UserModal
