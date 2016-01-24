import React from 'react';

import Hello from './hello.jsx';
import World from './world.jsx';

class Container extends React.Component {
	render() {
		return <div><Hello/><World/></div>;
	}
}

export default Container;