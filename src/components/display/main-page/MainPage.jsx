import NavBar from '../../common/navbar/NavBar'
import Button from '../../ui/button/Button'
import { icons } from './icons'
import styles from './MainPage.module.scss'
const MainPage = () => {
	return (
		<section className={styles.container}>
			<NavBar />
			<div className={styles.content}>
				<div className={styles['text-block']}>
					<h1 className={styles.heading}>
						O
						<span className='relative'>
							<span className={styles.gradient7}></span>w
						</span>
						n Your Crypto Adventure
					</h1>
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
			<div className={styles.circle1}></div>
			<div className={styles.circle2}></div>
			<div className={styles.circle3}></div>
			<div className={styles.gradient1}></div>
			<div className={styles.gradient2}></div>
			<div className={styles.gradient3}></div>
			<div className={styles.gradient4}></div>
			<div className={styles.gradient5}></div>
			<div className={styles.gradient6}></div>

			<img src={icons.bitcoin} alt={icons.bitcoin} className={styles.bitcoin} />
			<img
				src={icons.litecoin}
				alt={icons.litecoin}
				className={styles.litecoin}
			/>
			<img src={icons.monero} alt={icons.monero} className={styles.monero} />
			<img
				src={icons.etherium}
				alt={icons.etherium}
				className={styles.etherium}
			/>
			<img src={icons.star} alt={icons.star} className={styles.star} />
			<img src={icons.star} alt={icons.star} className={styles.star2} />
			<img
				src={icons.starMini}
				alt={icons.starMini}
				className={styles.starMini}
			/>
		</section>
	)
}

export default MainPage
