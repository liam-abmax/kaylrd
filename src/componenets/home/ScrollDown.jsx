import Scroll from '../../assets/scroll.svg?react';

const ScrollDown = () => {
	return (
		<div className='home-scroll'>
			<a href='#about' className='home-scroll-button button-flex'>
				<Scroll />
				<span className='home-scroll-name'>Scroll down</span>
				<i className='uil uil-arrow-down home-scroll-arrow'></i>
			</a>
		</div>
	);
};

export default ScrollDown;
