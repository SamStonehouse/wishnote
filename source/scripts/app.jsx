import React from 'react';

import Album from './wishlist/album/album-model';
import Gig from './wishlist/gig/gig-model';
import WishlistCollection from './wishlist/wishlist-model';
import Wishlist from './wishlist/wishlist.jsx';

let gig1 = new Gig({ artist: 'Elvis' });
let gig2 = new Gig({ artist: 'Joy Divison' });
let gig3 = new Gig({ artist: 'The Smiths' });

let album1 = new Album({ artist: 'Taylor Swift' });
let album2 = new Album({ artist: 'Queen' });
let album3 = new Album({ artist: 'Frankie Goes to Hollywood' });

let wishes = new WishlistCollection([gig1, gig2, album1, album2, gig3, album3]);

class App extends React.Component {
	render() {
		return (
			<div className='app'>
				<Wishlist list={ wishes } />
			</div>
		);
	}
}

export default App;