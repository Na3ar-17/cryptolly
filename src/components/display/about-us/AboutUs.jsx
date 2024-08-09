import styles from './AboutUs.module.scss'
const AboutUs = () => {
	return (
		<section className={styles.container}>
			<div className={styles.banner}>
				<div className={styles.frame}>
					<div className={styles.info}>
						<p className={styles['section-name']}>About Us</p>
						<h2 className={styles.title}>Company Standarts</h2>
						<p className={styles.description}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud.
						</p>
					</div>
					<div className={styles.statistics}>
						<ul className={styles.list}>
							<li className={styles.el}>
								<p className={styles.quontity}>
									<span>
										10M<span className='text-primary'>+</span>
									</span>
									<span className={styles.label}>User active</span>
								</p>
							</li>
							<li className={styles.el}>
								<p className={styles.quontity}>
									<span>
										30<span className='text-primary'>+</span>
									</span>
									<span className={styles.label}>Country</span>
								</p>
							</li>
							<li className={styles.el}>
								<p className={styles.quontity}>
									<span>
										$50M<span className='text-primary'>+</span>
									</span>
									<span className={styles.label}>Transaction</span>
								</p>
							</li>
						</ul>
					</div>
				</div>
				<div className={styles.img}>
					<img
						className={styles.image}
						src='../../../../public/icons/coin.png'
						alt='coin'
					/>
				</div>
			</div>
		</section>
	)
}

export default AboutUs
