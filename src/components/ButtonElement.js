import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Button = styled(Link)`
	border-radius: 15px;
	margin-top: 15px;
	background: ${({ primary }) => (primary ? '#fff' : '#e6e6e6')};
	white-space: nowrap;
	padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
	color: ${({ dark }) => (dark ? '#04AFA1' : '#000')};
	font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
	font-weight: bold;
	outline: none;
	border: none;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.2s ease-in-out;

	&:hover {
		transition: all 0.2s ease-in-out;
		background: ${({ primary }) => (primary ? '#e6e6e6' : '#05e1cf')};
	}
`;
