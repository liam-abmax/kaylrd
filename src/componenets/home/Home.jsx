import './home.css';
import Info from './Info';
import Social from './Social';
import ScrollDown from './ScrollDown';

const Home = () => {
	return (
		<section className='home section' id='home'>
			<div className='home-container container grid'>
				<div className='home-content grid'>
					<Social />

					<div className='home-img'></div>

					<Info />
				</div>

				<ScrollDown />
			</div>
		</section>
	);
};

export default Home;
