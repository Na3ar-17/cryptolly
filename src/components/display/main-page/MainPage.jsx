import NavBar from '../../common/navbar/NavBar'
import Button from '../../ui/button/Button'
import styles from './MainPage.module.scss'
const MainPage = () => {
	return (
		<section className={styles.container}>
			<NavBar />
			<div className={styles.content}>
				<div className={styles['text-block']}>
					<h1 className={styles.heading}>Own Your Crypto Adventure</h1>
					<p className={styles.text}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi{' '}
					</p>
					<div>
						<Button size='lg' label={'Get Started'} />
					</div>
				</div>
			</div>
			{/* <img src='/public/images/Bg.png' alt='bg' className={styles.bg} /> */}
			{/* <img className={styles.bg2} src='/public/images/Bg2.png' alt='bg-2' /> */}
			<div className={styles.circle1}></div>
			<div className={styles.circle2}></div>
			<div className={styles.circle3}></div>
		</section>
	)
}

export default MainPage
