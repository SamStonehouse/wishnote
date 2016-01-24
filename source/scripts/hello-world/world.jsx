import '!style!css!sass!./green.sass';

import React from 'react';

class World extends React.Component {
	render() {
		console.log('rednering');
		return <h1 className='green'>World</h1>;
	}
}

export default World;