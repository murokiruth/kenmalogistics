import styled from 'styled-components';

export const SolutionsCont = styled.div`
	height: 700px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: #dcdcdc;

	@media screen and (max-width: 1000px) {
		height: 1100px;
	}

	@media screen and (max-width: 480px) {
		height: 1400px;
	}
`;

export const SolutionsWrapper = styled.div`
	max-width: 1000px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	align-items: center;
	grid-gap: 20px;
	padding: 0 50px;

	@media screen and (max-width: 1000px) {
		grid-template-columns: 1fr 1fr;
	}

	@media screen and (max-width: 480px) {
		grid-template-columns: 1fr;
	}
`;

export const SolutionsCard = styled.div`
	background: #fff;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	border-radius: 10px;
	min-height: 400px;
	padding: 30px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
	transition: all 0.2s ease-in-out;

	&:hover {
		transform: scale(1.02);
		transition: all 0.2s ease-in-out;
		cursor: pointer;
	}
`;

export const SolutionsIcon = styled.img`
	width: 160px;
	height: 160px;
	margin-bottom: 10px;
`;

export const SolutionsH1 = styled.h1`
	font-size: 40px;
	color: #024b45;
	margin-bottom: 64px;

	@media screen and (max-width: 4800px) {
		font-size: 48px;
	}
`;

export const SolutionsH2 = styled.h2`
	font-size: 16px;
	margin-bottom: 10px;
`;

export const SolutionsP = styled.p`
	font-size: 16px;
	text-align: center;
`;
