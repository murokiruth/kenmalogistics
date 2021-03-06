import styled from 'styled-components';

export const InfoCont = styled.div`
	color: #fff;
	background: ${({ lightbg }) => (lightbg ? '#000' : '#fffcfc')};

	@media screen and (max-width: 770px) {
		padding: 100px 0;
		height: 1100px;
	}

	@media screen and (max-width: 480px) {
		height: 850px;
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
	grid-template-columns: 1fr 1fr;
	grid-auto-columns: minmax(auto, 1fr);
	align-items: center;
	grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

	@media screen and (max-width: 770px) {
		grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1 col2'` : `'col1 col1' 'col2 col2'`)};
	}

	@media screen and (max-width: 620px) {
		grid-template-columns: 1fr;
		display: block;
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
	color: #fff;
	max-width: 440px;
	font-size: 18px;
	line-height: 24px;
	color: ${({ darkText }) => (darkText ? '#e6e6e6' : '#024b45')};
`;

export const BtnWrap = styled.div`
	display: flex;
	justify-content: flex-start;
`;

export const ImgWrap = styled.div`
	max-width: 555px;
	height: 100%;
`;

export const Img = styled.img`
	width: 100%;
	margin: 0 0 10px 0;
	padding-right: 0;
`;

export const ModalWrapper = styled.div``;

export const ModalContent = styled.div`
	background-color: #024b45;
	width: 100%;
	/* height: 100%; */
	padding: 17px 10px 7px;
	border-radius: 10px;

	@media screen and (max-width: 480px) {
		justify-content: center;
		align-items: center;
		width: 350px;
	}
`;
