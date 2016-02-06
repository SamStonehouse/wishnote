import React from 'react';

import Header from './components/header.jsx';

import WishlistCollection from './wishlist/wishlist-model';
import Wishlist from './wishlist/wishlist.jsx';

import AddAlbum from './wishlist/album/add-album.jsx';
import AddGig from './wishlist/gig/add-gig.jsx';

import backgroundImage from 'file!../assets/images/background.jpg';

let wishes = new WishlistCollection();
wishes.fetch();

class App extends React.Component {
	render() {
		return (
			<div className='app' style={ { backgroundImage: 'url(' + backgroundImage +')'} }>
				<Header />
				<main className='container'>
					<Wishlist list={ wishes } onRemove={ this.removeItem } />
					<AddAlbum list={ wishes } onAdd={ this.addItem } />
					<AddGig list={ wishes } onAdd={ this.addItem } />
				</main>
			</div>
		);
	}

	addItem(item) {
		wishes.add(item);
		item.save();
	}

	removeItem(item) {
		item.destroy();
	}
}

export default App;