import { useState } from 'react';
import './services.css';
import { Data } from './Data';

const Services = () => {
	const [toggleState, setToggleState] = useState(0);

	return (
		<section className='services section' id='services'>
			<h2 className='section-title'>Services</h2>
			<span className='section-subtitle'>What I Offer</span>

			<div className='services-container container grid'>
				{Data.map((item) => (
					<div key={item.id} className='services-content'>
						<div>
							<i className={`uil ${item.icon} services-icon`}></i>
							<h3 className='services-title'>{item.title}</h3>
						</div>

						<span className='services-button' onClick={() => setToggleState(item.id)}>
							View more <i className='uil uil-arrow-right services-button-icon'></i>
						</span>

						<div
							className={
								toggleState === item.id
									? 'services-modal active-modal'
									: 'services-modal'
							}
						>
							<div className='services-modal-content'>
								<i
									className='uil uil-times services-modal-close'
									onClick={() => setToggleState(0)}
								></i>

								<h3 className='services-modal-title'>{item.title}</h3>
								<p className='services-modal-description'>{item.description}</p>

								<ul className='services-modal-services grid'>
									{item.services.map((service, index) => (
										<li key={index} className='services-modal-service'>
											<i className='uil uil-check-circle service-modal-icon'></i>
											<p className='services-modal-info'>{service}</p>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Services;
