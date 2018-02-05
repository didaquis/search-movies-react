import React, { Component } from "react";
import { Title } from './components/Title';
import "./App.css";
import 'bulma/css/bulma.css';



class App extends Component {
	render() {
		return (
			<div className="App">
				<Title>Search Movies</Title>
			</div>
		);
	}
}

export default App;