import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import LogoImg from '../../images/logoGreen.png';

export const Nav = styled.nav`
	background: ${({ scrollNav }) => (scrollNav ? '#024b45' : 'transparent')};
	height: 80px;
	margin-top: -80px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: sticky;
	top: 0;
	z-index: 10;

	@media screen and (max-width: 960px) {
		transition: 0.8s all;
	}
`;

export const NavBarCont = styled.div`
	display: flex;
	justify-content: space-between;
	height: 80px;
	z-index: 1;
	width: 100%;
	padding: 0 24px;
	max-width: 1100px;
`;

export const NavLogo = styled(LinkRouter)`
	color: #fff;
	justify-self: flex-start;
	cursor: pointer;
	display: flex;
	align-items: center;
	margin-left: 24px;
	font-size: 28px;
	font-weight: bold;
	font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
	text-decoration: none;
`;

export const NavIcon = styled.div`
	background-image: url(${LogoImg});
	height: 70px;
	width: 70px;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	margin-right: 15px;
`;

export const Name = styled.span`
	font-family: 'Roboto', sans-serif;
	font-size: 24px;
`;

export const MobileIcon = styled.div`
	display: none;

	@media screen and (max-width: 768px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 60%);
		cursor: pointer;
		color: #fff;
	}
`;

export const FaBars = styled.div``;

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	margin-right: -22px;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavItem = styled.li`
	height: 80px;
`;

export const NavLinks = styled(LinkScroll)`
	color: #fff;
	font-size: 18px;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;

	&.active {
		border-bottom: 3px solid #05e1cf;
	}
`;

export const DocuLink = styled.a`
	color: #fff;
	font-size: 18px;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;
`;
