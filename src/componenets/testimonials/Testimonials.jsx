import { Data } from './Data';
import './testimonials.css';

// Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// swiper required modules
import { Pagination } from 'swiper/modules';

const Testimonials = () => {
	return (
		<section className='testimonials container section' id='testimonials'>
			<h2 className='section-title'>What People Say</h2>
			<span className='section-subtitle'>Testimonial</span>

			<Swiper
				// loop={true}
				grabCursor={true}
				spaceBetween={24}
				pagination={{
					clickable: true,
				}}
				breakpoints={{
					576: {
						slidesPerView: 2,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 48,
					},
				}}
				modules={[Pagination]}
				className='testimonial-container'
			>
				{Data.map(({ id, image, name, link, title, description }) => {
					return (
						<SwiperSlide className='testimonial-card' key={id}>
							<img
								src={
									image
										? image
										: 'https://cdn.jsdelivr.net/gh/KhalidHayKay/Assets@e28212aaef3b22a5c20e74232538152f4fcef793/Portfolio/placeholder_man.jpg'
								}
								alt='testimonial_img'
								className='testimonial-image'
							/>

							<h3 className='testimonial-name'>
								{link ? (
									<a href={link} target='_blank' rel='noreferrer'>
										{name}
									</a>
								) : (
									name
								)}
							</h3>
							<h4 className='testimonial-job-title'>{title}</h4>
							<p className='testimonial-description'>{description}</p>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</section>
	);
};

export default Testimonials;
