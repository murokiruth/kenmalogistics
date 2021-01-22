import styled from 'styled-components';

export const ContactCont = styled.div`
	height: 700px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: #e6e6e6;

	@media screen and (max-width: 770px) {
		height: 800px;
	}

	@media screen and (max-width: 480px) {
		height: 700px;
	}
`;

export const ContactWrapper = styled.div`
	display: grid;
	z-index: 1;
	height: 500px;
	width: 100%;
	max-width: 1100px;
	margin-right: auto;
	margin-left: auto;
	padding: 0 24px;
`;

export const ContactRow = styled.div`
	display: grid;
	margin-top: -80px;
	grid-auto-columns: minmax(auto, 1fr);
	align-items: center;
	grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

	@media screen and (max-width: 770px) {
		grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1 col2'` : `'col1 col1' 'col2 col2'`)};
	}
`;

export const Column1 = styled.div`
	padding-top: 0;
	padding-bottom: 40px;
	grid-area: col1;
	max-width: 540px;
	justify-content: center;
`;

export const Column2 = styled.div`
	margin-bottom: 15px;
	padding: 0 15px;
	grid-area: col2;
	max-width: 540px;
	background: #037d73;
	grid-template-columns: 100%;
`;

export const ContactIcon = styled.img`
	width: 30%;
	margin-bottom: 10px;
	display: flex;
`;

export const ContactH1 = styled.h1`
	font-size: 40px;
	color: #000;
	margin-bottom: 64px;

	@media screen and (max-width: 4800px) {
		font-size: 48px;
	}
`;
export const ContactInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	padding: 30px;

	h2 {
		max-width: 440px;
		margin-bottom: 35px;
		font-size: 30px;
		line-height: 24px;
	}
	.content {
		max-width: 440px;
		margin-bottom: 35px;
		font-size: 20px;
		line-height: 24px;
	}
`;

export const ContactForm = styled.form``;
