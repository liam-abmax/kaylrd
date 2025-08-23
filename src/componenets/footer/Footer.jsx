import './footer.css';

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer-container container'>
				<h1 className='footer-title'>Khalid</h1>

				<ul className='footer-list'>
					<li>
						<a href='#about' className='footer-link'>
							About
						</a>
					</li>
					<li>
						<a href='#project' className='footer-link'>
							Projects
						</a>
					</li>
					<li>
						<a href='#testimonials' className='footer-link'>
							Testimonials
						</a>
					</li>
				</ul>

				<div className='footer-social'>
					{/* <a
						href='https://alamutukhalid.hashnode.dev'
						target='_blank'
						rel='noreferrer'
						className='footer-social-link'
					>
						<i className='bx bxs-book-content'></i>
					</a> */}
					<a
						href='https://x.com/kaylrd'
						target='_blank'
						rel='noreferrer'
						className='footer-social-link'
					>
						<i className='uil uil-twitter-alt'></i>
					</a>
					<a
						href='https://x.com/kaylrd'
						target='_blank'
						rel='noreferrer'
						className='footer-social-link'
					>
						<i className='bx bxl-twitter'></i>
					</a>
					<a
						href='https://www.linkedin.com/in/kayode-ajayi-65774829a/'
						target='_blank'
						rel='noreferrer'
						className='footer-social-link'
					>
						<i className='bx bxl-linkedin'></i>
					</a>
				</div>

				<span className='footer-copy'>&#169; Ajayi Kayode.</span>
			</div>
		</footer>
	);
};

export default Footer;
