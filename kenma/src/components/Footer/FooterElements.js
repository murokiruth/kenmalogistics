import styled from 'styled-components';
//import {Link} from "react-router-dom";

export const FooterCont = styled.footer`
	background: #024b45;
	height: 80px;
	margin-top: -80px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: sticky;
	bottom: 0;
	z-index: 10;

	@media screen and (max-width: 960px) {
		transition: 0.8s all;
	}
`;

export const FooterWrapper = styled.footer``;

export const WebsiteRights = styled.small`
	color: #fff;
	margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 240;
`;

export const SocialIconLink = styled.a`
	color: #fff;
	font-size: 24px;
`;
