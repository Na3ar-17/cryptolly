import { navBarData } from '../../../data/navbar.data'
import Button from '../../ui/button/Button'
import styles from './NavBar.module.scss'
import logo from '/public/images/Logo.png'

const NavBar = () => {
	return (
		<nav>
			<div className={styles.logo}>
				<img src={logo} alt='logo' />
			</div>
			<ul className={styles.list}>
				{navBarData.map((el, i) => (
					<li key={i} className={styles.el}>
						{el}
					</li>
				))}
			</ul>
			<div className={styles.action}>
				<Button label={'Get in Touch'} />
			</div>
		</nav>
	)
}

export default NavBar
