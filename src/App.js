import React, { Component, StrictMode } from "react";

import { Home } from './pages/Home';

import { Detail } from './pages/Detail';

import "./App.css";
import 'bulma/css/bulma.css';

class App extends Component {

	render() {

		const url = new URL(document.location);
		const hasId = url.searchParams.has('id');

		if (hasId) {
			return (
				<StrictMode>
					<div className="App">
						<Detail id={url.searchParams.get('id')} />
					</div>
				</StrictMode>
			);
		}

		return (
			<StrictMode>
				<div className="App">
					<Home />
				</div>
			</StrictMode>
		);
	}
}

export default App;