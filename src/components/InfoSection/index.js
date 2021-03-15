import React from 'react';
import Form from './formModal';
//import { Button } from '../ButtonElement.js';
import {
	InfoCont,
	InfoRow,
	InfoWrapper,
	Column1,
	TextWrapper,
	Heading,
	Subtitle,
	List,
	BtnWrap,
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
	list,
	formButton,
	buttonLabel,
	img,
	alt,
	// primary,
	// dark,
	// dark2,
}) => {
	return (
		<>
			<InfoCont id={id} lightBg={lightBg}>
				<InfoWrapper>
					<InfoRow imgStart={imgStart}>
						<Column1>
							<TextWrapper>
								<Heading lightText={lightText}> {heading} </Heading>
								<Subtitle darkText={darkText}> {description}</Subtitle>

								{list.map((item, index) => (
									<List key={index} darkText={darkText}>
										{item}
									</List>
								))}
							</TextWrapper>
						</Column1>
						<Column2>
							<ImgWrap>
								<Img src={img} alt={alt} />
							</ImgWrap>

							<div>
								{formButton.show ? (
									<BtnWrap>
										<Form {...formButton}></Form>
									</BtnWrap>
								) : (
									<></>
								)}
							</div>
						</Column2>
					</InfoRow>
				</InfoWrapper>
			</InfoCont>
		</>
	);
};

export default InfoSection;
