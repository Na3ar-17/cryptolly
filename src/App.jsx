import AboutUs from './components/display/about-us/AboutUs'
import Banner from './components/display/banner/Banner'
import Blog from './components/display/blog/Blog'
import FAQ from './components/display/FAQ/FAQ'
import MainPage from './components/display/main-page/MainPage'
import Services from './components/display/services/Services'
import Team from './components/display/team/Team'
import Tokens from './components/display/tokens/Tokens'

function App() {
	return (
		<>
			<MainPage />
			<AboutUs />
			<Services />
			<Tokens />
			<FAQ />
			<Team />
			<Blog />
			<Banner />
		</>
	)
}

export default App
