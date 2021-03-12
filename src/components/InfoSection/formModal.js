import React, { useState } from 'react';
import Modal from 'react-modal';
import { ModalContent, ModalWrapper } from './InfoSectionElements';
import './FormModal.css';
import { Button } from '../ButtonElement';

Modal.setAppElement('#root');
function Form(formButton) {
	const [ModalIsOpen, setModalIsOpen] = useState(false);

	return (
		<div className='form'>
			<Button
				onClick={() => setModalIsOpen(true)}
				smooth={true}
				duration={500}
				spy={true}
				exact={true}
				offset={-80}
				// primary={primary ? 1 : 0}
				// dark={dark ? 1 : 0}
				// dark2={dark2 ? 1 : 0}
			>
				{formButton.buttonLabel}
			</Button>
			<ModalWrapper>
				<Modal isOpen={ModalIsOpen} shouldCloseOnOverlayClick={false} onRequestClose={() => setModalIsOpen(false)}>
					<ModalContent>
						<h2>Tow Request Form</h2>
						<h5>All Fields are Required</h5>
						<div className='ModalBody'>
							<form>
								<label htmlFor='fname'>Name</label>
								<input type='text' className='fname' id='fname' name='fname' placeholder='first name' />
								<input type='text' className='lname' id='fname' name='fname' placeholder='last name' />

								<label htmlFor='email'> Email:</label>
								<input type='text' id='email' name='email' placeholder='enter your email' />

								<label htmlFor='lname'>Phone Number:</label>
								<input type='number' id='phonenumber' name='number' placeholder='enter your phone number' />

								<label htmlFor='fname'>Vehicle</label>
								<input type='text' id='fname' name='fname' placeholder='Licence Plate Number' />

								<label htmlFor='email'>Message </label>
								<textarea type='text' id='message' name='message' placeholder='enter your message'></textarea>

								<Button>SUBMIT</Button>
							</form>
						</div>
						<div>
							<Button onClick={() => setModalIsOpen(false)}>&times;</Button>
						</div>
					</ModalContent>
				</Modal>
			</ModalWrapper>
		</div>
	);
}

export default Form;
