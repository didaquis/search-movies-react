import React, { Component, Fragment } from 'react';

import { Title } from '../components/Title';
import { SearchForm } from '../components/SearchForm';
import { MoviesList } from '../components/MoviesList';

export class Home extends Component {
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
		return (
			<Fragment>
				<Title>Search Movies</Title>
				<div className='SearchForm-wrapper'>
					<SearchForm onResults={this._handleResults} />
				</div>
				{this.state.usedSearch
					? this._renderResults()
					: <small>Use the form to search a movie</small>
				}
			</Fragment>
		)
	}
}