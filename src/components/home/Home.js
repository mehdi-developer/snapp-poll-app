import React from 'react';
import { NavLink } from 'react-router-dom';
function Home() {
	return (
		<div className="home">
			<h3>آیا از سفر خود راضی بودید ؟</h3>

			<NavLink to="/compliment">
				<button className="button mt-3">بله</button>
			</NavLink>
			<NavLink to="/complaint">
				<button className="button mt-3">خیر</button>
			</NavLink>
		</div>
	);
}

export default Home;
