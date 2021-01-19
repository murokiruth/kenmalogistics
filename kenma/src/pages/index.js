import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import SideBar from '../components/SideBar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import Solutions from '../components/Solutions';
import { homeObjOne, homeObjThree } from '../components/InfoSection/Data';
import Footer from '../components/Footer';

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<SideBar isOpen={isOpen} toggle={toggle} />
			<Navbar toggle={toggle} />
			<HeroSection />
			<InfoSection {...homeObjOne} />
			<Solutions />
			<InfoSection {...homeObjThree} />
			<Footer />
		</>
	);
};

export default Home;
