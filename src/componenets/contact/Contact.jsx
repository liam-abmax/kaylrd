import './contact.css';
import ContactForm from './ContactForm';

const Contact = () => {
	return (
		<div className='contact section' id='contact'>
			<h2 className='section-title'>Get In Touch</h2>
			<span className='section-subtitle'>Contact Me</span>

			<div className='contact-container container grid'>
				<div className='contact-content'>
					<h3 className='contact-title'>Talk to me</h3>

					<div className='contact-info'>
						<div className='contact-card'>
							<i className='bx bx-mail-send contact-card-icon'></i>

							<h3 className='contact-card-title'>Email</h3>
							<span className='contact-card-data'>olukay54@gmail.com</span>

							<a
								href='mailto:olukay54@gmail.com'
								target='_blank'
								rel='noreferrer'
								className='contact-button'
							>
								Write me <i className='bx bx-right-arrow-alt contact-button-icon'></i>
							</a>
						</div>

						<div className='contact-card'>
							<i className='bx bxl-whatsapp contact-card-icon'></i>

							<h3 className='contact-card-title'>Whatapp</h3>
							<span className='contact-card-data'>+2348067575969</span>

							<a
								href='https://api.whatsapp.com/send?phone=+2348067575969&text=Hello'
								target='_blank'
								rel='noreferrer'
								className='contact-button'
							>
								Write me <i className='bx bx-right-arrow-alt contact-button-icon'></i>
							</a>
						</div>

						<div className='contact-card'>
							<i className='bx bxl-messenger contact-card-icon'></i>

							<h3 className='contact-card-title'>Messenger</h3>
							<span className='contact-card-data'>khalidhaykay.alamutu</span>

							<a
								href='https://m.me/khalidhaykay.alamutu'
								target='_blank'
								rel='noreferrer'
								className='contact-button'
							>
								Write me <i className='bx bx-right-arrow-alt contact-button-icon'></i>
							</a>
						</div>
					</div>
				</div>

				<div className='contact-content'>
					<h3 className='contact-title'>Write Me Your Project</h3>

					<ContactForm />
				</div>
			</div>
		</div>
	);
};

export default Contact;
