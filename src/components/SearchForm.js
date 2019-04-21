import React, { Component } from 'react';

const API_KEY = process.env.REACT_APP_IMDB_API_KEY;

export class SearchForm extends Component {
	state = {
		inputMovie: ''
	}

	_handleChange = (e) => {
		this.setState({ inputMovie: e.target.value })
	}

	_handleSubmit = (e) => {
		e.preventDefault();
		const { inputMovie } = this.state;

		fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
			.then(res => res.json())
			.then(results => {
				const { Search = [] } = results;
				this.props.onResults(Search);
			});

		this.setState( {inputMovie: ''} );
	}

	render() {
		return(
			<form onSubmit={this._handleSubmit} className="medium-margin-bottom">
				<div className="field has-addons">
					<div className="control">
						<input 
							autoFocus
							className="input" 
							onChange={this._handleChange}
							placeholder="Movie to search..." 
							required
							type="text" 
							value={this.state.inputMovie} 
						/>
					</div>
					 <div className="control">
						<button className="button is-info">
							Search
						</button>
					</div>
				</div>
			</form>
		)
	}
}