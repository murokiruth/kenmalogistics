//Reusable
import Image1 from '../../images/whitetruck.webp';
import Image2 from '../../images/tow.svg';

export const homeObjOne = {
	id: 'about',
	lightBg: false,
	lightText: false,
	lightTextDesc: true,
	heading: 'About Us',
	description:
		' Since opening our doors, we’ve been committed to providing service of the highest quality, paying particular attention to working efficiently while keeping the lines of communication with our clients clear and concise. No matter what service you’re looking for, we guarantee to not only meet, but exceed your expectations and ensure your full satisfaction.',
	list: [],
	formButton: {show:false,buttonLabel:''},
	buttonLabel: '',
	imgStart: false,
	img: Image1,
	alt: 'Truck',
	dark: true,
	primary: true,
	darkText: false,
};

export const homeObjTwo = {
	id: 'towing',
	lightBg: false,
	lightText: false,
	lightTextDesc: true,
	heading: 'Towing',
	description:
		' We offer realiable towing services in the DFW area. Our crews are highly trained and very experienced to safely and properly tow your vehicle from one location to the destination of your choosing. Below are some of the towing services we offer.',
	list: [
		'Private Property Towing Services',
		'Emergency Roadside Assistance',
		'Affordable Tow Truck Services - Accident Removal',
		'Motorcycle Tow Truck',
	],
	formButton: {show:true,buttonLabel:'REQUEST A TOW'},
	buttonLabel: 'REQUEST A TOW',
	imgStart: true,
	img: Image2,
	alt: 'Truck',
	dark: true,
	primary: true,
	darkText: false,
};
