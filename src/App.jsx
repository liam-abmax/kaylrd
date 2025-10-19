import { useEffect } from 'react';
import './App.css';
import About from './componenets/about/About';
import Contact from './componenets/contact/Contact';
import Footer from './componenets/footer/Footer';
import Header from './componenets/header/Header';
import Home from './componenets/home/Home';
import ScrollUp from './componenets/scrollup/ScrollUp';
import Services from './componenets/services/Services';
import Skills from './componenets/skills/Skills';
import Testimonials from './componenets/testimonials/Testimonials';
import Works from './componenets/works/Works';
import emailjs from '@emailjs/browser';
import { Analytics } from "@vercel/analytics/next";

function App() {
	useEffect(() => {
		emailjs.init({
			publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
			blockHeadless: true,
			blockList: {
				// list: ['foo@emailjs.com', 'bar@emailjs.com'],
			},
			limitRate: {
				id: 'app',
				throttle: 10000,
			},
		});
	}, []);

	return (
		<>
			<Header />

			<main className='main'>
				<Home />
				<About />
				<Skills />
				<Services />
				<Works />
				<Testimonials />
				<Contact />
				<Analytics />
			</main>

			<Footer />
			<ScrollUp />
		</>
	);
}

export default App;
