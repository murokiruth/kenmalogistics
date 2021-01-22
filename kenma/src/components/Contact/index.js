import React from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import './Form.css';
import {
	ContactCont,
	ContactH1,
	ContactWrapper,
	ContactRow,
	Column1,
	Column2,
	// ContactIcon,
	ContactInfo,
} from './ContactElements.js';
// import LogoIcon1 from '../../images/logoTruck.png';

const Contact = () => {
	return (
		<ContactCont id='contactus'>
			<ContactH1> Contact Us </ContactH1>
			<ContactWrapper>
				<ContactRow>
					<Column1>
						{/* <ContactIcon src={LogoIcon1} /> */}
						<ContactInfo>
							<div>
								<h2>Get in Touch with Us</h2>
							</div>
							<div className='content'>
								<FaEnvelope />
								<i>Quote@kenmalogistics.inc.com</i>
							</div>
							<div className='content'>
								<FaPhoneAlt />
								<i>877-568-9898</i>
							</div>
							<div className='content'>
								<p>Any questions or remarks? Just write us a message!</p>
							</div>
						</ContactInfo>
					</Column1>

					<Column2>
						<form action='/'>
							<div className='Col'>
								<div>
									<label className='formLabel' htmlFor='fname'>
										First name:
									</label>
									<input type='text' id='fname' name='fname' placeholder='John' />
								</div>

								<div>
									<label className='formLabel' htmlFor='lname'>
										Last name:
									</label>
									<input type='text' id='lname' name='lname' placeholder='Doe' />
								</div>

								<div>
									<label className='formLabel' htmlFor='email'>
										Email:
									</label>
									<input type='text' id='email' name='email' placeholder='enter your email' />
								</div>

								<div>
									<label className='formLabel' htmlFor='lname'>
										Phone Number:
									</label>
									<input type='number' id='phonenumber' name='number' placeholder='your phone number' />
								</div>

								<div>
									<label className='formLabel' htmlFor='email'>
										Message
									</label>
									<textarea type='text' id='message' name='message' placeholder='enter your message'></textarea>
								</div>
								<div>
									<button type='submit' className='form-btn'>
										Submit
									</button>
								</div>
							</div>
						</form>
					</Column2>
				</ContactRow>
			</ContactWrapper>
		</ContactCont>
	);
};

export default Contact;
