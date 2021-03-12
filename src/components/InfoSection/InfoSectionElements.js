import styled from 'styled-components';

export const InfoCont = styled.div`
	color: #fff;
	background: ${({ lightbg }) => (lightbg ? '#000' : '#fffcfc')};

	@media screen and (max-width: 770px) {
		padding: 100px 0;
	}
`;

export const InfoWrapper = styled.div`
	display: grid;
	z-index: 1;
	height: 500px;
	width: 100%;
	max-width: 1100px;
	margin-right: auto;
	margin-left: auto;
	padding: 0 24px;
	justify-content: center;
`;

export const InfoRow = styled.div`
	display: grid;
	grid-auto-columns: minmax(auto, 1fr);
	align-items: center;
	grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

	@media screen and (max-width: 770px) {
		grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1 col2'` : `'col1 col1' 'col2 col2'`)};
	}
`;

export const Column1 = styled.div`
	margin-bottom: 15px;
	padding: 0 15px;
	grid-area: col1;
`;

export const Column2 = styled.div`
	margin-bottom: 15px;
	padding: 0 15px;
	grid-area: col2;
`;

export const TextWrapper = styled.div`
	max-width: 540px;
	padding-top: 0;
	padding-bottom: 40px;
`;

export const Heading = styled.h1`
	/* color: #e6e6e6; */
	margin-bottom: 24px;
	font-size: 48px;
	line-height: 1.1;
	font-weight: 600;
	color: ${({ lightText }) => (lightText ? '#000' : '#024b45')};

	@media screen and (max-width: 480px) {
		font-size: 32px;
	}
`;

export const Subtitle = styled.p`
	/* color: #000; */
	max-width: 440px;
	margin-bottom: 35px;
	font-size: 18px;
	line-height: 24px;
	color: ${({ darkText }) => (darkText ? '#e6e6e6' : '#024b45')};
`;

export const List = styled.ul`
	/* color: #000; */
	max-width: 440px;
	font-size: 18px;
	line-height: 24px;
	color: ${({ darkText }) => (darkText ? '#e6e6e6' : '#024b45')};
`;

export const BtnWrap = styled.div`
	display: flex;
	justify-content: flex-start;
`;

export const Button = styled.button``;

export const ImgWrap = styled.div`
	max-width: 555px;
	height: 100%;
`;

export const Img = styled.img`
	width: 100%;
	margin: 0 0 10px 0;
	padding-right: 0;
`;

export const ModalWrapper = styled.div`
	background: red;
	width: 80%auto;
	max-width: 300px;
`;

export const ModalContent = styled.div`
	width: 400px;
	min-height: 620px;
	max-height: 620px;
	padding: 17px 10px 7px;
	position: relative;
	box-sizing: border-box;
	border-bottom: none;
	background-color: #05e1cf;
	z-index: 99;
	/* background:yellow;
	width: 80%;
	max-height: 300px
	position: 'absolute', */
	/* top: '40px',
	left: '40px',
	right: '40px',
	bottom: '40px',
	border: '1px solid #ccc',
	background: '#fff',
	overflow: 'auto',
	WebkitOverflowScrolling: 'touch',
	borderRadius: '4px',
	outline: 'none',
	padding: '20px' */
`;
