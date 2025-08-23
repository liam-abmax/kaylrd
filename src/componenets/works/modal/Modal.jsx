import './modal.css';

const Modal = ({ item, workIndex }) => {
	return (
		<div className={workIndex.value === item.id ? 'active-modal modal' : 'modal'}>
			<div className='modal-content'>
				<i
					className='uil uil-times modal-close'
					onClick={() => workIndex.set(0)}
				></i>

				<h3 className='modal-title'>{item.title}</h3>
				<p
					className='modal-description'
					dangerouslySetInnerHTML={{ __html: item.description }}
				></p>

				<div className='modal-links'>
					<a
						href={item.github}
						target='_blank'
						rel='noreferrer'
						className='modal-link'
					>
						<span className='modal-link-title'>Github</span>
						<i className='bx bxl-github modal-link-icon'></i>
					</a>
					{item.website && (
						<a
							href={item.website}
							target='_blank'
							rel='noreferrer'
							className='modal-link'
						>
							<span className='modal-link-title'>Preview</span>
							<i className='bx bx-show-alt modal-link-icon'></i>
						</a>
					)}
				</div>
			</div>
		</div>
	);
};

export default Modal;
