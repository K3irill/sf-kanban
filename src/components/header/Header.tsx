import React from 'react'
import cn from 'classnames'

import styles from './Header.module.scss'
import UserElement from '../UserElement/UserElement'
import Logo from '../Logo/Logo'

//---------------------------------------
const Header = () => {
	return (
		<div className={styles.header}>
			<div className={cn(styles.header, '__container')}>
				<Logo>K3 Kanban Board</Logo>
				<UserElement />
			</div>
		</div>
	)
}

export default Header
