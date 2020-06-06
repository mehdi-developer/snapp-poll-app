import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Loading from './components/loading/Loading';
import Home from './components/home/Home';
import Yes from './components/yes/Yes';
import No from './components/no/No';
import Final from './components/final/Final';

import { Route, Switch } from 'react-router-dom';

function App() {
	const [ loading, setLoading ] = useState(true);
	useEffect(
		() => {
			setTimeout(() => {
				setLoading(false);
			}, 3500);
		},
		[ loading ]
	);
	return (
		<div className="App">
			{loading ? <Loading /> : null}
			<Switch>
				<Route exact={true} path="/" component={Home} />
				<Route exact={true} path="/complaint" component={No} />
				<Route exact={true} path="/compliment" component={Yes} />
				<Route exact={true} path="/final" component={Final} />
				<Route exact={true} component={Home} />
			</Switch>
		</div>
	);
}

export default App;
