import React from 'react';
import renderer from 'react-test-renderer';

// Import Components
import Messenger from '../src/components/Messenger';

// Import Mockdata
import * as MockData from './data/mockmessengerdata.json';
const MockMessengerData = [...MockData];

//MockMessengerData.map(message => console.log(message.code));

it('renders correctly', () => {
	const Component = renderer
		.create(<Messenger Messenger={MockMessengerData} limit={5}/>)
		.toJSON();
	expect(Component).toMatchSnapshot();
});