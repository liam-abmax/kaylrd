import { useEffect, useState } from 'react';
import './header.css';

const Header = () => {
	const [toggle, showMenu] = useState(false);
	const [scrollDepth, setScrollDepth] = useState(0);
	const [activeNav, setActiveNav] = useState('home');

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
		<div>
			<header className={scrollDepth >= 80 ? 'scroll-header header' : 'header'}>
				<nav className='nav container'>
					<a href='index.html' className='nav-logo'>
						Kayode
					</a>

					<div className={toggle ? 'nav-menu show-menu' : 'nav-menu'}>
						<ul className='nav-list grid'>
							<li className='nav-item'>
								<a
									href='#home'
									onClick={() => setActiveNav('home')}
									className={activeNav === 'home' ? 'active-link nav-link' : 'nav-link'}
								>
									<i className='uil uil-estate nav-icon'></i> Home
								</a>
							</li>
							<li className='nav-item'>
								<a
									href='#about'
									onClick={() => setActiveNav('about')}
									className={activeNav === 'about' ? 'active-link nav-link' : 'nav-link'}
								>
									<i className='uil uil-home nav-icon'></i> About
								</a>
							</li>
							<li className='nav-item'>
								<a
									href='#skills'
									onClick={() => setActiveNav('skills')}
									className={
										activeNav === 'skills' ? 'active-link nav-link' : 'nav-link'
									}
								>
									<i className='uil uil-file-alt nav-icon'></i> Skills
								</a>
							</li>
							<li className='nav-item'>
								<a
									href='#services'
									onClick={() => setActiveNav('services')}
									className={
										activeNav === 'services' ? 'active-link nav-link' : 'nav-link'
									}
								>
									<i className='uil uil-user-arrows nav-icon'></i> Services
								</a>
							</li>
							<li className='nav-item'>
								<a
									href='#portfolio'
									onClick={() => setActiveNav('portfolio')}
									className={
										activeNav === 'portfoilio' ? 'active-link nav-link' : 'nav-link'
									}
								>
									<i className='uil uil-briefcase-alt nav-icon'></i> Portfolio
								</a>
							</li>
							<li className='nav-item'>
								<a
									href='#contact'
									onClick={() => setActiveNav('contact')}
									className={
										activeNav === 'contact' ? 'active-link nav-link' : 'nav-link'
									}
								>
									<i className='uil uil-message nav-icon'></i> Contact
								</a>
							</li>
						</ul>

						<i
							className='uil uil-times nav-close'
							onClick={() => showMenu(!toggle)}
						></i>
					</div>

					<div className='nav-toggle' onClick={() => showMenu(!toggle)}>
						<i className='uil uil-apps'></i>
					</div>
				</nav>
			</header>
		</div>
	);
};

export default Header;
