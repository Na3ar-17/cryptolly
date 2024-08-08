import { useState } from 'react'
import { navBarData } from '../../../data/navbar.data'
import Burger from '../../ui/burger/Burger'
import Button from '../../ui/button/Button'
import List from './list/List'
import styles from './NavBar.module.scss'
import logo from '/public/images/Logo.png'

const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<nav className={styles.nav}>
			<div className={styles.logo}>
				<img className={styles.image} src={logo} alt='logo' />
			</div>
			<List />
			<div className={styles.action}>
				<Button label={'Get in Touch'} />
				<Burger isOpen={isOpen} setIsOpen={() => setIsOpen(!isOpen)} />
			</div>
		</nav>
	)
}

export default NavBar
