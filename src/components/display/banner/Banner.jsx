import InfoBlock from '../../common/info-block/InfoBlock'
import Button from '../../ui/button/Button'
import styles from './Banner.module.scss'
const Banner = () => {
	return (
		<section className={styles.container}>
			<div className={styles.banner}>
				<div className={styles.text}>
					<InfoBlock
						sectionName={'Start Now'}
						title={'Sign up to learn more'}
						description={
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In amet amet integer'
						}
						titleStyles={{ fontSize: '32px', fontWeight: '600' }}
						descriptionStyles={{ margin: 0 }}
					/>
					<div className='mt-6'>
						<Button label={'Get Started'} size='lg' />
					</div>
				</div>
				<div className={styles.image}>
					<img
						src='/public/images/stack_of_coins.png'
						alt='stack_of_coins.png'
					/>
				</div>
			</div>
			<img
				src='/public/images/footer-circle1.png'
				alt='footer-circle1.png'
				className={styles.circle1}
			/>
			<img
				src='/public/images/footer-circle2.png'
				alt='footer-circle2.png'
				className={styles.circle2}
			/>
			<img
				src='/public/images/footer-circle3.png'
				alt='footer-circle3.png'
				className={styles.circle3}
			/>
		</section>
	)
}

export default Banner
