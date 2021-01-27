import React from 'react';
import Icon1 from '../../images/logoTruck.png';
import Icon2 from '../../images/logoTruck.png';
import Icon3 from '../../images/logoTruck.png';
import {
	SolutionsCont,
	SolutionsH1,
	SolutionsH2,
	SolutionsWrapper,
	SolutionsCard,
	SolutionsIcon,
	SolutionsP,
} from './SolutionsElements.js';

const Solutions = () => {
	return (
		<SolutionsCont id='solutions'>
			<SolutionsH1>Our Solutions</SolutionsH1>
			<SolutionsWrapper>
				<SolutionsCard>
					<SolutionsIcon src={Icon1} />
					<SolutionsH2>EXPEDITED SERVICES</SolutionsH2>
					<SolutionsP>
						You can count on us to be professional, timely, efficient and make sure you’re satisfied every step of the
						way. Clients know exactly what to expect - professionalism, efficiency and exceptional results
					</SolutionsP>
				</SolutionsCard>
				<SolutionsCard>
					<SolutionsIcon src={Icon2} />
					<SolutionsH2>LOGISTIC SOLUTIONS</SolutionsH2>
					<SolutionsP>we cater to the needs of each client, ensuring the results you need and deserve</SolutionsP>
				</SolutionsCard>
				<SolutionsCard>
					<SolutionsIcon src={Icon3} />
					<SolutionsH2>TRUCKLOAD SHIPPING</SolutionsH2>
					<SolutionsP>
						We have the experience and skills necessary to tackle just about every type of job that comes our way.
					</SolutionsP>
				</SolutionsCard>
			</SolutionsWrapper>
		</SolutionsCont>
	);
};

export default Solutions;
