import styles from './InfoBlock.module.scss'

const InfoBlock = ({ sectionName, title, description }) => {
	return (
		<div className={styles.info}>
			<p className={styles['section-name']}>{sectionName}</p>
			<h2 className={styles.title}>{title}</h2>
			<p className={styles.description}>{description}</p>
		</div>
	)
}

export default InfoBlock
