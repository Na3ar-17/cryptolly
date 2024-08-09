import Button from '../../../ui/button/Button'
import styles from './Card.module.scss'

const Card = ({ date, title, img }) => {
	return (
		<div className={styles.card}>
			<header className={styles.image}>
				<img src={img} alt={img} className={styles.img} />
			</header>
			<footer className={styles.footer}>
				<p className={styles.date}>{date}</p>
				<div className={styles.line}></div>
				<p className={styles.title}>{title}</p>
				<div className='md:mt-2'>
					<Button
						style={{ fontWeight: '500', fontSize: '16px' }}
						label={'Read More'}
						icon={
							<img src='/public/icons/arrow-right.png' alt='arrow-right.png' />
						}
					/>
				</div>
			</footer>
		</div>
	)
}

export default Card
