import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

const API_KEY = process.env.REACT_APP_IMDB_API_KEY;

export class Detail extends Component {
	static propTypes = {
		id: PropTypes.string.isRequired
	}

	state = {
		movie: {}
	}

	_fetchMovie ({ id }) {
		fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
			.then(res => res.json())
			.then(movie => {
				this.setState({ movie });
			});
	}

	_goBack () {
		window.history.back();
	}

	componentDidMount () {
		const { id } = this.props;
		this._fetchMovie({ id });
	}

	render() {

		const { Title, Actors, Metascore, Plot } = this.state.movie;
		let { Poster} = this.state.movie;

		if( (Poster === 'N/A') || (Poster === '') ){
			Poster = 'images/no-image.png';
		}

		return (
			<Fragment>
				<button className="button" onClick={this._goBack}>Volver</button>

				<section className="hero">
					<div className="hero-body">
						<div className="container">
							<h1 className="title">
								{Title}
							</h1>
							<h2 className="subtitle">
								{Plot}
							</h2>
							<img src={Poster} alt={Title}/>
							<h3>{Actors}</h3>
							<span>{Metascore}</span>
						</div>
					</div>
				</section>
			</Fragment>
		)
	}
}