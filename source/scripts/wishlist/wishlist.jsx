import '!style!css!sass!./wishlist.sass';

import React from 'react';

import Album from './album/album.jsx';
import Gig from './gig/gig.jsx';

class Wishlist extends React.Component {
	render() {
		return (
			<div className='wishlist'>
				<Album className='wishlist-item'/><Gig className='wishlist-item'/>
			</div>
		);
	}
}

Wishlist.defaultProps = {
};

Wishlist.propTypes = {
};

export default Wishlist;