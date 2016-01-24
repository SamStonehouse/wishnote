import '!style!css!sass!./green.sass';
import '!style!css!sass!./hello.sass';

import React from 'react';

class Hello extends React.Component {
	render() {
		return <h1 className='hello green'>Hello</h1>;
	}
}

export default Hello;