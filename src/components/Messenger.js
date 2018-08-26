import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';

export default class Messenger extends React.Component {
	render(){
		const { Messenger } = this.props;
		return (
			<div className="container">
				{Messenger.map((message,index) => {
					return 	<Alert color={message.type} key={index}>
						<h4 className="alert-heading">{message.message}{' '}<span>{message.code}</span></h4>
						<p>{message.description}</p>
						{ message.source !== void 0 && message.stacktrace !== void 0
							? <hr/>
							: null
						}
						{ message.source !== void 0
							? <p className="mb-0">{message.source}</p>
							: null
						}
						{ message.source !== void 0
							? <pre><code>{message.stacktrace}</code></pre>
							: null
						}
					</Alert>;
				})}
			</div>);
	}
}

/* Messenger.propTypes = {
	Messenger: PropTypes.arrayOf(
		PropTypes.object({
			type       : PropTypes.string,
			messages   : PropTypes.string,
			code       : PropTypes.number,
			description: PropTypes.string
		}))
}; */
