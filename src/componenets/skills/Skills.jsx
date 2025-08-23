import './skills.css';
import { Data } from './Data';

const Skills = () => {
	return (
		<section className='skills section' id='skills'>
			<h2 className='section-title'>Skills</h2>
			<span className='section-subtitle'>My Techinical Level</span>

			<div className='skills-container container grid'>
				{Data.map((item) => (
					<div key={item.id} className='skills-content'>
						<h3 className='skills-title'>{item.title}</h3>

						<div className='skills-box'>
							{item.skills.map((skill, index) => (
								<div key={index} className='skills-data'>
									<i className='bx bx-badge-check'></i>

									<div>
										<h3 className='skills-name'>{skill.name}</h3>
										<span className='skills-experience'>{skill.experience}</span>
									</div>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Skills;
