import Image from 'next/image';

import classes from './hero.module.css';

const Hero = () => {
	return (
		<section className={classes.hero}>
			<div className={classes.image}>
				<Image
					src='/images/site/self.jpeg'
					alt='Shahmir image'
					width={300}
					height={300}
				/>
			</div>
			<h1>Hi, I am Shahmir Khan Jadoon</h1>
			<p>I am making this blog site for learning NextJS</p>
		</section>
	);
};

export default Hero;
