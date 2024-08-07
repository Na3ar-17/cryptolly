import { cn } from '../../../../lib/utils'
import styles from './Card.module.scss'

const Card = ({ img, title, description, isTokenCard = false }) => {
	return (
		<div
			className={cn(styles.card, {
				[styles.tokenCard]: isTokenCard,
			})}
		>
			<header className={styles.header}>
				<div className={styles.icon}>
					<img className={styles.image} src={img} alt='service-icon' />
				</div>
				<p className={styles.title}>{title}</p>
			</header>
			<footer className={styles.footer}>{description}</footer>
		</div>
	)
}

export default Card
