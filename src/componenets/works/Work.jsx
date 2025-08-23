import { useState } from 'react';
import Modal from './modal/Modal';

const Work = ({ item }) => {
	const [workIndex, setWorkIndex] = useState(0);

	return (
		<div className='work-card'>
			<img src={item.image} alt='work__image' className='work-img' />

			<h3 className='work-title'>{item.title}</h3>
			<button
				href=''
				className='work-button'
				onClick={() => setWorkIndex(item.id)}
			>
				Details <i className='bx bx-right-arrow-alt work-button-icon'></i>
			</button>

			<Modal item={item} workIndex={{ value: workIndex, set: setWorkIndex }} />
		</div>
	);
};

export default Work;
