import { useEffect, useState } from 'react';
import './scrollup.css';

const ScrollUp = () => {
	const [scrollDepth, setScrollDepth] = useState(0);

	const handleWindowScroll = () => {
		setScrollDepth(window.scrollY);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleWindowScroll);

		return () => {
			window.removeEventListener('scroll', handleWindowScroll);
		};
	}, []);

	return (
		// eslint-disable-next-line
		<a
			href='#'
			className={scrollDepth >= 560 ? 'show-scroll scrollup' : 'scrollup'}
		>
			<i className='uil uil-arrow-up scrollup-icon'></i>
		</a>
	);
};

export default ScrollUp;
