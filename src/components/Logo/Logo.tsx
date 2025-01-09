import React, { ReactNode } from 'react'
import styles from './Logo.module.scss'
import { useNavigate } from 'react-router'

type LogoProps = {
	children: ReactNode
}
const Logo = ({ children }: LogoProps) => {
	const navigate = useNavigate()
	return (
		<div onClick={() => navigate('/')} className={styles.logo}>
			{children}
		</div>
	)
}

export default Logo
