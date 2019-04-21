import React, { Fragment } from 'react';

import { ButtonBackToHome } from '../components/ButtonBackToHome';

export const NotFound = () => (
	<Fragment>
		<div className="columns is-mobile is-centered">
			<div className="column is-half">
				<h2 className="has-text-danger has-text-weight-bold is-italic">404 - page not found</h2>
			</div>
		</div>
		<div className="columns is-mobile is-centered">
			<ButtonBackToHome />
		</div>
	</Fragment>
)