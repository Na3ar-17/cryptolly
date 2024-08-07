import { cn } from '../../../lib/utils'
import styles from './InfoBlock.module.scss'

const InfoBlock = ({
	sectionName,
	title,
	description,
	titleStyles,
	descriptionStyles,
	containerStyles,
}) => {
	return (
		<div className={cn(styles.info, containerStyles)}>
			<p className={styles['section-name']}>{sectionName}</p>
			<h2 style={titleStyles} className={styles.title}>
				{title}
			</h2>
			<p style={descriptionStyles} className={styles.description}>
				{description}
			</p>
		</div>
	)
}

export default InfoBlock
