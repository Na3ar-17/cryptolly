import { serviceCardData } from '../../../data/service.data'
import InfoBlock from '../../common/info-block/InfoBlock'
import Card from './card/Card'
import styles from './Services.module.scss'
const Services = () => {
	return (
		<section className={styles.container}>
			<div className={styles.icon}>
				<img
					src='/public/icons/star-img.png'
					alt='start'
					className={styles.image}
				/>
			</div>
			<div className={styles.cards}>
				<div className={styles['info-card']}>
					<InfoBlock
						sectionName={'Our Services'}
						title={'Our Services for You'}
						description={`	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud.`}
					/>
				</div>
				{serviceCardData.map((el, i) => (
					<Card
						key={i}
						title={el.title}
						description={el.description}
						img={el.img}
					/>
				))}
			</div>
		</section>
	)
}

export default Services
