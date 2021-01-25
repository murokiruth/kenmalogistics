//jsx wil be stored here//
import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import {
	Nav,
	NavBarCont,
	NavLogo,
	MobileIcon,
	NavMenu,
	NavItem,
	NavLinks,
	Name,
	DocuLink,
	NavIcon,
} from './NavBarElements';

const Navbar = ({ toggle }) => {
	const [scrollNav, setScrollNav] = useState(false);

	const changeNav = () => {
		if (window.scrollY >= 80) {
			setScrollNav(true);
		} else {
			setScrollNav(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', changeNav);
	}, []);

	const toggleHome = () => {
		scroll.scrollToTop();
	};

	return (
		<>
			<IconContext.Provider value={{ color: '#e6e6e6' }}>
				<Nav scrollNav={scrollNav}>
					<NavBarCont>
						<NavLogo to='/' onClick={toggleHome}>
							<NavIcon />
							<Name>KENMA</Name>LOGISTICS
						</NavLogo>

						<MobileIcon onClick={toggle}>
							<FaBars />
						</MobileIcon>
						<NavMenu>
							<NavItem>
								<NavLinks to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
									About
								</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to='solutions' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
									Solutions
								</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to='contactus' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
									Contact Us
								</NavLinks>
							</NavItem>
							<NavItem>
								<DocuLink
									href='https://account.docusign.com/#/username'
									target='_blank'
									aria-label='Docusign'
									smooth={true}
									duration={500}
									spy={true}
									exact='true'
									offset={-80}>
									Carrier Setup
								</DocuLink>
							</NavItem>
						</NavMenu>
					</NavBarCont>
				</Nav>
			</IconContext.Provider>
		</>
	);
};

export default Navbar;
