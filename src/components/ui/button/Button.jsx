import { cn } from '../../../lib/utils'
import styles from './Button.module.scss'

const Button = ({ label, size = 'sm', disabled = false }) => {
	return (
		<button
			className={cn(styles.button, {
				[styles.small]: size === 'sm',
				[styles.large]: size === 'lg',
				[styles.disabled]: disabled,
			})}
			disabled={disabled}
		>
			{label}
		</button>
	)
}

export default Button
