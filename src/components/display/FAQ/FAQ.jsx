import { useState } from 'react'
import { FAQCardData } from '../../../data/FAQ.data'
import InfoBlock from '../../common/info-block/InfoBlock'
import Card from './card/Card'
import styles from './FAQ.module.scss'

const FAQ = () => {
	const [currentCard, setCurrentCard] = useState('')

	const action = question => {
		setCurrentCard(question)

		if (currentCard === question) {
			setCurrentCard('')
		}
	}

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
					<Card
						setCurrentCard={action}
						isOpen={currentCard === el.question}
						answer={el.answer}
						question={el.question}
						key={i}
					/>
				))}
			</div>
			<picture>
				<source
					srcSet='/public/images/illustration-md.png'
					media='(max-width: 744px)'
				/>
				<img
					className={styles.illustration}
					src='/public/images/illustration.png'
					alt='illustration.png'
				/>
			</picture>
		</section>
	)
}

export default FAQ
