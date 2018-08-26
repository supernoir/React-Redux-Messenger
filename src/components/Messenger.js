import React from 'react';
import PropTypes from 'prop-types';
import { Alert, Badge } from 'reactstrap';

export default class Messenger extends React.Component {
	render(){
		const { Messenger } = this.props;
		return (
			<div className="container">
				{Messenger !== void 0 ? Messenger.map((message, index) => {
					return 	<Alert color={message.type} key={index}>
						<h4 className="alert-heading">
							{ message.code !== void 0
								? <small><Badge color={message.type}>{message.code}</Badge></small>
								: null
							}{' '}
							{message.message}
						</h4>
						<p>{message.description}</p>
						{ message.source !== void 0 && message.stacktrace !== void 0
							? <hr/>
							: null
						}
						{ message.source !== void 0
							? <p className="mb-0"><strong>Source: </strong>{message.source}</p>
							: null
						}
						{ message.source !== void 0
							? <pre><code>{message.stacktrace}</code></pre>
							: null
						}
					</Alert>;
				}):null}
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
