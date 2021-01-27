import React from 'react';
//import { Button } from '../ButtonElement.js';
import {
	InfoCont,
	InfoRow,
	InfoWrapper,
	Column1,
	TextWrapper,
	Heading,
	Subtitle,
	//BtnWrap,
	Column2,
	ImgWrap,
	Img,
} from './InfoSectionElements';

const InfoSection = ({
	id,
	lightBg,
	imgStart,
	lightText,
	heading,
	darkText,
	description,
	buttonLabel,
	img,
	alt,
	//primary,
	//dark,
	//dark2,
}) => {
	return (
		<>
			<InfoCont id={id} lightBg={lightBg}>
				<InfoWrapper>
					<InfoRow imgStart={imgStart}>
						<Column1>
							<TextWrapper>
								<Heading lightText={lightText}> {heading} </Heading>
								<Subtitle darkText={darkText}> {description} </Subtitle>
								{/* <BtnWrap>
									<Button
										to='home'
										smooth={true}
										duration={500}
										spy={true}
										exact={true}
										offset={-80}
										primary={primary ? 1 : 0}
										dark={dark ? 1 : 0}
										dark2={dark2 ? 1 : 0}>
										{buttonLabel}{' '}
									</Button>
								</BtnWrap> */}
							</TextWrapper>
						</Column1>
						<Column2>
							<ImgWrap>
								<Img src={img} alt={alt} />
							</ImgWrap>
						</Column2>
					</InfoRow>
				</InfoWrapper>
			</InfoCont>
		</>
	);
};

export default InfoSection;
