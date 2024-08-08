import { teamCardData } from '../../../data/team.data'
import InfoBlock from '../../common/info-block/InfoBlock'
import Card from './card/Card'
import styles from './Team.module.scss'

const Team = () => {
	return (
		<section className={styles.container}>
			<InfoBlock
				sectionName={'Team'}
				title={'Member of our expert team'}
				description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo ipsum
aliquet turpis elit elit natoque varius eget facilisi. Amet rhoncus`}
				containerStyles={'text-center'}
				descriptionStyles={{
					textAlign: 'center',
					maxWidth: '500px',
					margin: '24px auto',
				}}
				titleStyles={{ textAlign: 'center' }}
			/>

			<div className={styles.cards}>
				<div className={styles['info-card']}>
					<img
						src='/public/images/team-image4.png'
						alt='team-image4.png'
						className={styles['bg-image']}
					/>
					<img
						src='/public/images/team-bg-opacity.png'
						alt='team-bg-opacity.png'
						className={styles['bg-opacity']}
					/>
					<header className={styles.header}>
						<img src='/public/icons/facebook.png' alt='facebook.png' />
						<img src='/public/icons/twitter.png' alt='twitter.png' />
						<img src='/public/icons/instagram.png' alt='instagram.png' />
						<img src='/public/icons/linkedin.png' alt='linkedin.png' />
					</header>
					<footer className={styles.footer}>
						<p className={styles.title}>Hulon Anish</p>
						<p className={styles.description}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. In amet
							amet integer
						</p>
					</footer>
				</div>
				{teamCardData.map((el, i) => (
					<Card key={i} name={el.name} img={el.img} />
				))}
			</div>
			<img
				src='/public/images/coins2.png'
				alt='coins2.png'
				className={styles.coins}
			/>
			<img
				src='/public/images/bg-gradient.png'
				alt='bg-gradient.png'
				className={styles.gradient}
			/>
		</section>
	)
}

export default Team
