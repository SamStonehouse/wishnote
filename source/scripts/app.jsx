import React from 'react';

import { Collection, Model } from 'backbone';



// import Album from './wishlist/album/album-model';
import Gig from './wishlist/gig/gig-model';
import WishlistCollection from './wishlist/wishlist-model';
// import Wishlist from './wishlist/wishlist.jsx';

import Plant from './wishlist/plant.js';
import Greenhouse from './wishlist/greenhouse.js';

// let gig1 = new Gig({ artist: 'Elvis' });
// let gig2 = new Gig({ artist: 'Joy Divison' });
// let gig3 = new Gig({ artist: 'The Smiths' });


// let album1 = new Album({
// 	artist: 'Taylor Swift'
// });
// let album2 = new Album({
// 	artist: 'Queen'
// });
// let album3 = new Album({
// 	artist: 'Frankie Goes to Hollywood'
// });





// let wishes = new WishlistCollection([gig1, gig2]);
// wishes.add(gig1);
// wishes.add(gig2);

// let wishes = new WishlistCollection([{
// 	artist: 'Elvis'
// }, {
// 	artist: 'wadl'
// }]);

// wishes.each(function(gig) {
// 	console.log(gig.get('artist'));
// });

class App extends React.Component {
	render() {
		return (
			<div className='app'></div>
		);
	}
}

export default App;

let plant1 = new Plant({ name: 'Rose' });
let plant2 = new Plant({ name: 'Daisy' });

let house = new Greenhouse([plant1, plant2]);

house.each(function(plant) {
    console.log(plant.get('name'))
});

let gig1 = new Gig({ artist: 'Elvis' });
let gig2 = new Gig({ artist: 'Joy Divison' });

let wishes = new WishlistCollection([gig1, gig2]);

wishes.each(function(gig) {
	console.log(gig.get('artist'));
});