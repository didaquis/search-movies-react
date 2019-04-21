import React, { Component, StrictMode } from "react";

import { Home } from './pages/Home';

import { Detail } from './pages/Detail';

import "./App.css";
import 'bulma/css/bulma.css';

class App extends Component {

	render() {

		const url = new URL(document.location);
		const Page = url.searchParams.has('id')
			?
				<Detail id={url.searchParams.get('id')}/>
			:
				<Home />

		return (
			<StrictMode>
				<div className="App">
					{Page}
				</div>
			</StrictMode>
		);
	}
}

export default App;