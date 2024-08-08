import { navBarData } from '../../../../data/navbar.data'
import { cn } from '../../../../lib/utils'
import styles from './List.module.scss'

const List = ({ isFooter = false }) => {
	return (
		<ul className={styles.list}>
			{navBarData.map((el, i) => (
				<li
					key={i}
					className={cn(styles.el, isFooter ? 'text-gray-40' : 'text-[#fff]')}
				>
					{el}
				</li>
			))}
		</ul>
	)
}

export default List
