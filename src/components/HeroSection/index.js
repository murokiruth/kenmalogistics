import React from 'react';
// import Video from '../../videos/video.mp4';
import Image from '../../images/homeImage1.jpg';
import { HeroContainer, HeroBackground, HeroImage, HeroContent, HeroH1, HeroP } from './HeroSectionElements';
// import { Button } from '../ButtonElement.js';

const HeroSection = () => {
	return (
		<HeroContainer>
			<HeroBackground>
				<HeroImage src={Image} type='img' />
				{/* <VideoBackground autoPlay loop src={Video} type='video/mp4' /> */}
			</HeroBackground>
			<HeroContent>
				<HeroH1>Welcome to KenmaLogistics!</HeroH1>
				<HeroP>Rethinking Logistic Solutions</HeroP>
				<HeroP>"The industry expert in home and business delivery services."</HeroP>
				{/* <HeroBtnWrapper>
					<Button to='signup'>Get Started {hover ? <ArrowForward /> : <ArrowRight />}</Button>
				</HeroBtnWrapper> */}
			</HeroContent>
		</HeroContainer>
	);
};

export default HeroSection;
