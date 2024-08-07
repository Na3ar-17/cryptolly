import NavBar from '../../common/navbar/NavBar'
import Button from '../../ui/button/Button'
import styles from './MainPage.module.scss'
import { icons } from './icons'
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
			<img src='/public/images/Bg.png' alt='bg' className={styles.bg} />

			{/* <div className={styles.oval}></div>

			<img
				className={styles.oval2}
				src='/public/images/Ellipse 75.png'
				alt='elips'
			/>
			<img
				className={styles.oval3}
				src='/public/images/Ellipse 76.png'
				alt='elips'
			/>

			<img
				src='/public/images/gradient1.png'
				alt='gradient1.png'
				className={styles.gradient1}
			/>
			<img
				src='/public/images/gradient2.png'
				alt='gradient2.png'
				className={styles.gradient2}
			/>
			<img
				src='/public/images/gradient3.png'
				alt='gradient3.png'
				className={styles.gradient3}
			/>
			<img className={styles.bitcoin} src={icons.bitcoin} alt={icons.bitcoin} />
			<img
				className={styles.litecoin}
				src={icons.litecoin}
				alt={icons.litecoin}
			/>
			<img className={styles.monero} src={icons.monero} alt={icons.monero} />
			<img
				className={styles.etherium}
				src={icons.etherium}
				alt={icons.etherium}
			/>
			<img
				className={styles.starMini}
				src={icons.starMini}
				alt={icons.starMini}
			/>
			<img className={styles.star} src={icons.star} alt={icons.star} />
			<img className={styles.star} src={icons.star} alt={icons.star} /> */}
		</section>
	)
}

export default MainPage
