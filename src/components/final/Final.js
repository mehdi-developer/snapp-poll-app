import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
function Final() {
	const [ show, setShow ] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<div className="route">
			<img alt="img" className="img-fluid final-logo pb-3" src={require('../../assets/img/logo.png')} />
			<p>سپاسگذاریم از شرکت کردن شما در این نظرسنجی</p>
			<p>.هدف ازین نظرسنجی بهبود کیفیت سفر شماست</p>
			<Button variant="success" onClick={handleShow}>
				درباره
			</Button>

			<Modal className="text-right" show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title className="text-right ml-auto mr-auto">
						<p className="text-right ml-auto mr-auto">درباره</p>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p> وب اپلیکیشن نظرسنجی اسنپ نمونه ای دیگری از اپ اصلیست و توسط مهدی فرجی توسعه یافته</p>
					<a
						className="ml-1 mr-1"
						rel="noopener noreferrer"
						target="_blank"
						href="https://github.com/mehdi-developer"
					>
						گیت هاب
					</a>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						بازگشت
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

export default Final;
