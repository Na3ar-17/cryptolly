import List from '../../common/navbar/list/List'
import Input from '../../ui/input/Input'
import styles from './Footer.module.scss'

const Footer = () => {
	return (
		<footer className={styles.container}>
			<div className={styles.content}>
				<div className={styles.contact}>
					<div className={styles.logo}>
						<img src='/public/images/Logo.png' alt='Logo.png' />
					</div>
					<p className={styles.text}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud.
					</p>
					<Input label={'Email Address'} />
					<p className='text-gray-20 font-normal text-xs leading-[16.8px]'>
						© 2021 GPD Holdings, LLC FinCEN MSB
					</p>
				</div>
				<div className={styles.menu}>
					<List isFooter />
				</div>
				<p className='text-gray-20 leading-[19.6px] text-sm font-semibold absolute right-0 bottom-[20px]'>
					Privacy Policy and Terms of Service
				</p>
			</div>
			<img
				src='/public/images/footer-gradient.png'
				alt='footer-gradient.png'
				className={styles.gradient}
			/>
		</footer>
	)
}

export default Footer
