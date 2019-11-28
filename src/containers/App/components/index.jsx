import React from "react";
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../../Dashboard';

const App = () => {
	return (
		<div>
			hello
			<Switch>
				<Route exact path={'/'} component={Dashboard} />
			</Switch>
		</div>
	)
}

export default App;