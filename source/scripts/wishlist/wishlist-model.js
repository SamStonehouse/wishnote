import LocalStorage from 'backbone.localstorage';
import BackboneMulticlass from '../utils/backbone-multiclass';

import Album from './album/album-model';
import Gig from './gig/gig-model';

import WishlistItem from './wishlist-item-model.js';

const storage = new LocalStorage('wishnote-storage');

class Wishlist extends BackboneMulticlass(WishlistItem, [Album, Gig]) {
	constructor(options) {
		super(options);
		this.localStorage = storage;
	}
}

export default Wishlist;