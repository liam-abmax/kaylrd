import { useContactForm } from './useContactForm'; // Adjust path as needed

const ContactForm = () => {
	const { formState, handleSubmit, clearMessage } = useContactForm();

	return (
		<form onSubmit={handleSubmit} className='contact-form'>
			<div className='contact-form-div'>
				<label htmlFor='name' className='contact-form-tag'>
					Name
				</label>
				<input
					type='text'
					name='name'
					id='name'
					className='contact-form-input'
					placeholder='Insert your name'
					required
					disabled={formState.isLoading}
				/>
			</div>

			<div className='contact-form-div'>
				<label htmlFor='email' className='contact-form-tag'>
					Mail
				</label>
				<input
					type='email'
					name='email'
					id='email'
					className='contact-form-input'
					placeholder='Insert your email'
					required
					disabled={formState.isLoading}
				/>
			</div>

			<div className='contact-form-div contact-form-area'>
				<label htmlFor='project' className='contact-form-tag'>
					Project
				</label>
				<textarea
					name='project'
					id='project'
					rows='10'
					cols='30'
					className='contact-form-input'
					placeholder='Write Project'
					required
					disabled={formState.isLoading}
				></textarea>
			</div>

			<p
				className={`contact-mail-message ${
					formState.message.text ? `show ${formState.message.status}` : ''
				}`}
			>
				{formState.message.text}
				<button
					type='button'
					className='contact-mail-message-button'
					onClick={clearMessage}
				>
					<i className='bx bx-x'></i>
				</button>
			</p>

			<button
				className='button button-flex'
				disabled={formState.isLoading}
				type='submit'
			>
				Send Message
				<i className='bx bx-send' style={{ marginLeft: '8px' }}></i>
			</button>
		</form>
	);
};

export default ContactForm;
