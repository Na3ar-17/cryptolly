import { blogCardData } from '../../../data/blog.data'
import InfoBlock from '../../common/info-block/InfoBlock'
import styles from './Blog.module.scss'
import Card from './card/Card'

const Blog = () => {
	return (
		<section className={styles.container}>
			<InfoBlock
				sectionName={'Blog'}
				title={'Latest News & Blog'}
				description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo ipsum
aliquet turpis elit elit natoque varius eget facilisi. Amet rhoncus`}
				containerStyles={'text-center'}
				descriptionStyles={{
					textAlign: 'center',
					maxWidth: '500px',
					margin: '24px auto',
				}}
				titleStyles={{ textAlign: 'center' }}
			/>
			<div className={styles.cards}>
				{blogCardData.map((el, i) => (
					<Card key={i} date={el.date} img={el.img} title={el.title} />
				))}
			</div>
		</section>
	)
}

export default Blog
