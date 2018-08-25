import React from 'react';
import ReactDOM from 'react-dom';

// Import Components
import Messenger from './components/Messenger';

// Import CSS
//import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

export default class ReactReduxMessenger extends React.Component {

	render(){
		const Messages = {
			message    : 'An error occurred!',
			code       : 500,
			description: 'You should read the manual'
		};

  	return(
  		<React.Fragment>
  			<Messenger Messenger={Messages} />
  		</React.Fragment>
  	);
	}
}

ReactDOM.render(
	<ReactReduxMessenger/>, document.getElementById('app')
);