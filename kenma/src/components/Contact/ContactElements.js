import styled from 'styled-components';

export const ContactCont = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: #aba8a8;
	padding: 25px;
	margin-bottom: 80px;

	/* @media screen and (max-width: 770px) {
		height: 1100px;
	}

	@media screen and (max-width: 480px) {
		min-height: 1200px;
	} */
`;

export const ContactWrapper = styled.div`
	max-width: 1000px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: center;
	grid-gap: 20px;

	@media screen and (max-width: 780px) {
		grid-template-columns: 1fr;
	}

	@media screen and (max-width: 480px) {
		grid-template-columns: 1fr;
		/* padding: 0 20px; */
	}
`;

export const ContactRow = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	border-radius: 10px;
	min-height: 400px;
`;

export const Column1 = styled.div`
	justify-content: center;
	margin-bottom: 15px;
	padding: 0 15px;
	grid-area: col1;
`;

export const Column2 = styled.div`
	border-radius: 20px;
	margin-bottom: 15px;
	justify-content: center;
	padding: 30px 50px;
	grid-area: col2;
	background: #037d73;
	width: 100%;
`;

export const ContactIcon = styled.img`
	width: 30%;
	margin-bottom: 10px;
	display: flex;
`;

export const ContactH1 = styled.h1`
	font-size: 40px;
	color: #fff;
	margin-top: 30px;
	margin-bottom: 44px;

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

	h3 {
		max-width: 440px;
		margin-bottom: 35px;
		/* font-size: 30px; */
		line-height: 24px;
		text-align: center;
	}
	.content {
		max-width: 440px;
		margin-bottom: 35px;
		font-size: 20px;
		line-height: 24px;
		text-align: center;
	}
`;
