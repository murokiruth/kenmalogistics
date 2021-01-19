import React from 'react';
import {
	SideBarCont,
	Icon,
	CloseIcon,
	SideBarWrapper,
	SideBarMenu,
	SideBarLink,
	//SideBtnWrap,
	//SideBarRoute,
} from './SideBarElements';

const SideBar = ({ isOpen, toggle }) => {
	return (
		<SideBarCont isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<SideBarWrapper>
				<SideBarMenu>
					<SideBarLink to='about' onClick={toggle}>
						{' '}
						About{' '}
					</SideBarLink>
					<SideBarLink to='solutions' onClick={toggle}>
						{' '}
						Solution{' '}
					</SideBarLink>
					<SideBarLink to='contactUs' onClick={toggle}>
						{' '}
						Contact Us{' '}
					</SideBarLink>
					{/* <SideBarLink to='signup' onClick={toggle}>
						{' '}
						Sign Up{' '}
					</SideBarLink> */}
				</SideBarMenu>
				{/* <SideBtnWrap>
					<SideBarRoute to='/signin' onClick={toggle}>
						Home
					</SideBarRoute>
				</SideBtnWrap> */}
			</SideBarWrapper>
		</SideBarCont>
	);
};

export default SideBar;
