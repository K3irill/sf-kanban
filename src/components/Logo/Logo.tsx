import React, { ReactNode } from 'react'
import styles from './Logo.module.scss'

type LogoProps = {
	children: ReactNode
}
const Logo = ({ children }: LogoProps) => {
	return <div className={styles.logo}>{children}</div>
}

export default Logo
