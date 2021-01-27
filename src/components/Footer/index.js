import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { FooterCont, FooterWrapper, SocialIcons, SocialIconLink, WebsiteRights } from './FooterElements';

const Footer = () => {
	return (
		<>
			<FooterCont>
				<FooterWrapper>
					<SocialIcons>
						<SocialIconLink href='https://www.facebook.com/' target='_blank' aria-label='Facebook'>
							<FaFacebook />
						</SocialIconLink>
						<SocialIconLink href='https://www.twitter.com/' target='_blank' aria-label='Twitter'>
							<FaTwitter />
						</SocialIconLink>
						<SocialIconLink href='https://www.linkedin.com/' target='_blank' aria-label='Linkedin'>
							<FaLinkedin />
						</SocialIconLink>
					</SocialIcons>
					<WebsiteRights>KenmaLogics © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
				</FooterWrapper>
			</FooterCont>
		</>
	);
};

export default Footer;
