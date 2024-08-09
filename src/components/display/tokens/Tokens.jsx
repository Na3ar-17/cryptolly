import { tokenCardData } from '../../../data/tokens.data'
import InfoBlock from '../../common/info-block/InfoBlock'
import Card from '../services/card/Card'
import styles from './Tokens.module.scss'
const Tokens = () => {
	return (
		<section className={styles.container}>
			<InfoBlock
				sectionName={'Our Token'}
				title={'Token seal'}
				description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo ipsum
aliquet turpis elit elit natoque varius eget facilisi. Amet rhoncus`}
				titleStyles={{ textAlign: 'center' }}
				containerStyles={'w-[500px]'}
				descriptionStyles={{ textAlign: 'center' }}
			/>

			<div className={styles.cards}>
				{tokenCardData.map((el, i) => (
					<Card
						key={i}
						img={el.img}
						title={el.title}
						description={el.description}
						isTokenCard
					/>
				))}
				<div className={styles.card}></div>
			</div>
			<picture>
				<source
					srcSet='../../../../public/images/coins-md.png'
					media='(max-width:744px)'
				/>
				<img
					src='../../../../public/images/coins.png'
					alt='coins'
					className={styles.coins}
				/>
			</picture>

			<div className={styles.gradient}></div>
			<div className={styles.gradient2}></div>
		</section>
	)
}

export default Tokens
