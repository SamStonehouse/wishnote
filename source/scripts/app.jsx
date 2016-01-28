import React from 'react';

import WishlistCollection from './wishlist/wishlist-model';
import Wishlist from './wishlist/wishlist.jsx';

import AddAlbum from './wishlist/album/add-album.jsx';
import AddGig from './wishlist/gig/add-gig.jsx';

import SpotifyUtils from './utils/spotify/spotify-utils';

let wishes = new WishlistCollection();
wishes.fetch();

class App extends React.Component {
	render() {
		return (
			<div className='app'>
				<Wishlist list={ wishes } onRemove={ this.removeItem } />
				<AddAlbum list={ wishes } onAdd={ this.addItem } />
				<AddGig list={ wishes } onAdd={ this.addItem } />
			</div>
		);
	}

	addItem(item) {
		SpotifyUtils(item.get('artist')).then(function(artists) {
			if (artists.length > 0) {
				item.set({ spotifyArtist: artists[0] });
				item.save();
			}
		});
		wishes.add(item);
		item.save();
	}

	removeItem(item) {
		// wishes.remove(item);
		// wishes.sync();
		item.destroy();
	}
}

export default App;