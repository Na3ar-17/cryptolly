import styles from './Card.module.scss'

const Card = ({ name, img }) => {
	return (
		<div className={styles.card}>
			<header className={styles.header}>{name}</header>
			<img src={img} alt={name} className={styles.hero} />
		</div>
	)
}

export default Card
