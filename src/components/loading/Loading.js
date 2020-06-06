import React, { useEffect, useState } from 'react';
import './Loading.css';

function Loading() {
	const [ logo, setLogo ] = useState(false);
	useEffect(
		() => {
			setTimeout(() => {
				setLogo(true);
			}, 1500);
		},
		[ logo ]
	);
	return (
		<div className="loading">
			<p className="loading__text">سفری با کیفیت با</p>
			<img
				alt="img"
				className={`${logo ? `img-fluid logo d-block` : `img-fluid logo hidden`}`}
				src={require('../../assets/img/logo.png')}
			/>
			<img
				alt="img"
				className="d-block img-fluid loading__spinner"
				src={require('../../assets/img/loading.gif')}
			/>
		</div>
	);
}

export default Loading;
