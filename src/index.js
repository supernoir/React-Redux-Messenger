import React from 'react';
import ReactDOM from 'react-dom';

// Import Components
import Messenger from './components/Messenger';

// Import CSS
//import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

export default class ReactReduxMessenger extends React.Component {

	render(){
		const messageLimit = 5;
		const Messages = [
			{
				message    : 'An error occurred!',
				type       : 'danger',
				source     : 'App - Component threw an Error',
				stacktrace : 'Check the render method of `component`. See https://fb.me/react-warning-keys for more information.',
				code       : 500,
				description: 'You should read the manual'
			},
			{
				message    : 'You should check it out',
				type       : 'warning',
				source     : 'App - Component rendered with warnings',
				stacktrace : 'Warning: Each child in an array or iterator should have a unique "key" prop.',
				code       : 400,
				description: 'Something doesn\'t feel right'
			},
			{
				message    : 'All is well',
				type       : 'info',
				description: 'Just a shiny new day without any clouds'
			},
			{
				message    : 'You done and did it',
				type       : 'success',
				description: 'Whoa buddy - that\'s amazing!'
			}
		];

  	return(
			<div className="container">
				<h1>React Redux Messenger</h1>
				<hr/>
				<Messenger Messenger={Messages} limit={messageLimit} />
			</div>
  	);
	}
}

ReactDOM.render(
	<ReactReduxMessenger/>, document.getElementById('app')
);