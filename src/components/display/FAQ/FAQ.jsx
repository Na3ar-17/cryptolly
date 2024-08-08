import { FAQCardData } from '../../../data/FAQ.data'
import InfoBlock from '../../common/info-block/InfoBlock'
import Card from './card/Card'
import styles from './FAQ.module.scss'

const FAQ = () => {
	return (
		<section className={styles.container}>
			<InfoBlock
				sectionName={'FAQ’s'}
				title={'Frequently Asked Questions'}
				description={`When an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
				containerStyles={'w-[713px]] text-center'}
				descriptionStyles={{ textAlign: 'center' }}
				titleStyles={{ textAlign: 'center' }}
			/>
			<div className={styles.cards}>
				{FAQCardData.map((el, i) => (
					<Card answer={el.answer} question={el.question} key={i} />
				))}
			</div>
			<img
				className={styles.illustration}
				src='/public/images/illustration.png'
				alt='illustration.png'
			/>
		</section>
	)
}

export default FAQ
