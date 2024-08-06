import { navBarData } from '../../../data/navbar.data'
import Button from '../../ui/button/Button'
import styles from './NavBar.module.scss'
import logo from '/public/images/Logo.png'

const NavBar = () => {
	return (
		<nav className={styles.nav}>
			<div className={styles.logo}>
				<img className={styles.image} src={logo} alt='logo' />
			</div>
			<ul className={styles.list}>
				{navBarData.map((el, i) => (
					<li key={i} className={styles.el}>
						{el}
					</li>
				))}
			</ul>
			<div>
				<Button label={'Get in Touch'} />
			</div>
		</nav>
	)
}

export default NavBar
