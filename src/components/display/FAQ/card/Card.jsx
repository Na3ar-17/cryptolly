import { useState } from 'react'
import { cn } from '../../../../lib/utils'
import styles from './Card.module.scss'

const Card = ({ question, answer, isOpen, setCurrentCard }) => {
	return (
		<div
			className={cn(styles.card, {
				[styles.open]: isOpen,
			})}
		>
			<header className={styles.header}>{question}</header>
			<img
				src='/public/icons/action-icon.png'
				alt='action-icon.png'
				className={cn(styles.icon, {
					'rotate-45': !isOpen,
				})}
				onClick={() => setCurrentCard(question)}
			/>
			<footer
				className={cn(styles.footer, {
					[styles.open]: isOpen,
				})}
			>
				{answer}
			</footer>
		</div>
	)
}

export default Card
