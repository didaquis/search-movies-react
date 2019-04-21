import React, { Component, StrictMode } from "react";

import { Switch, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Detail } from './pages/Detail';
import { NotFound } from './pages/NotFound';

import "./App.css";
import 'bulma/css/bulma.css';

class App extends Component {

	render() {
		return (
			<StrictMode>
				<div className="App">
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/detail/:id" component={Detail} />
						<Route component={NotFound} />
					</Switch>
				</div>
			</StrictMode>
		);
	}
}

export default App;