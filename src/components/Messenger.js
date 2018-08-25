import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';

export default class Messenger extends React.Component {
	render(){
		const { Messenger } = this.props;
		return (
			<div className="container">
				<Alert color="success">
					<h4 className="alert-heading">{Messenger.message}{' '}<span>{Messenger.code}</span></h4>
					<p>{Messenger.description}</p>
					<hr />
					<p className="mb-0">
          Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
					</p>
				</Alert>
			</div>);
	}
}

Messenger.propTypes = {
	Messenger: PropTypes.objectOf({
		messages   : PropTypes.string,
		code       : PropTypes.number,
		description: PropTypes.string
	})
};
