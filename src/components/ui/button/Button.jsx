import { cn } from '../../../lib/utils'
import styles from './Button.module.scss'

const Button = ({ label, size = 'sm', disabled = false, style, icon }) => {
	return (
		<button
			className={cn(styles.button, {
				[styles.small]: size === 'sm',
				[styles.large]: size === 'lg',
				[styles.disabled]: disabled,
				'flex items-center gap-[10px]': !!icon,
			})}
			disabled={disabled}
			style={style}
		>
			{label}
			{icon && icon}
		</button>
	)
}

export default Button
