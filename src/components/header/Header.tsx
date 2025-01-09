import React from 'react'
import cn from 'classnames'

import styles from './Header.module.scss'
import UserElement from '../UserElement/UserElement'
import Logo from '../Logo/Logo'

//---------------------------------------
const Header = () => {
	return (
		<header className={styles.header}>
			<div className={cn(styles.header__container, '__container')}>
				<Logo>K3 Kanban Board</Logo>
				<UserElement />
			</div>
		</header>
	)
}

export default Header
