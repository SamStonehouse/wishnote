import React from 'react';

import WishlistCollection from './wishlist/wishlist-model';
import Wishlist from './wishlist/wishlist.jsx';

import AddAlbum from './wishlist/album/add-album.jsx';
import AddGig from './wishlist/gig/add-gig.jsx';

let wishes = new WishlistCollection();
wishes.fetch();

class App extends React.Component {
	render() {
		return (
			<div className='app'>
				<Wishlist list={ wishes } />
				<AddAlbum list={ wishes } onAdd={ this.addItem } />
				<AddGig list={ wishes } onAdd={ this.addGig } />
			</div>
		);
	}

	addItem(item) {
		wishes.add(item);
		item.save();
	}
}

export default App;