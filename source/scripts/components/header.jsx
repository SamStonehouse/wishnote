import '!style!css!sass!./header.sass';

import React from 'react';

class Header extends React.Component {

	render() {
		return (
			<header className='header'>
				<div className='container'>
					<h1>Wishnote</h1>
				</div>
			</header>
		);
	}

}

export default Header;