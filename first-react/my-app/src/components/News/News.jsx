import '../../assets/style/News.scss'
import NewsItem from '../../elements/NewsItem'

function News() {
	return(
		<div className="news">
			<p className="news__text">News</p>
			<NewsItem/>
			<NewsItem/>
			<NewsItem/>
		</div>
	)
}

export default News;