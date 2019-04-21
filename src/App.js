import React, { Component, StrictMode } from "react";
import { Title } from './components/Title';
import { SearchForm } from './components/SearchForm';
import { MoviesList } from './components/MoviesList';

import { Detail } from './pages/Detail';

import "./App.css";
import 'bulma/css/bulma.css';

class App extends Component {
	state = { usedSearch: false, results: [] }

	fixResultsWithoutImage(results){
		/* La API de OMDb no siempre devuelve una imagen. Aplicamos un fix */
		for (let i = 0; i < results.length; i++){
			if( (results[i]['Poster'] === 'N/A') || (results[i]['Poster'] === '') ){
				results[i]['Poster'] = 'images/no-image.png';
			}
		}
		return results;
	}

	_handleResults = (results) => {

		const resultsFixed = this.fixResultsWithoutImage(results);

		this.setState({ results:resultsFixed, usedSearch: true });
	}

	_renderResults(){
		return this.state.results.length === 0 
			? <p>Sorry! <span role="img" aria-label="Sad Face">😕</span> Results not found!</p> 
			: <MoviesList movies={this.state.results} />
	}

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
					<Title>Search Movies</Title>
					<div className='SearchForm-wrapper'>
						<SearchForm onResults={this._handleResults} />
					</div>
					{this.state.usedSearch
						? this._renderResults()
						: <small>Use the form to search a movie</small>
					}
				</div>
			</StrictMode>
		);
	}
}

export default App;