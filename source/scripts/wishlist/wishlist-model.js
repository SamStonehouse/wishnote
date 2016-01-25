import { Collection } from 'backbone';
import LocalStorage from 'backbone.localstorage';

import WishlistItem from './wishlist-item-model.js';

const storage = new LocalStorage('wishnote-storage');

class Wishlist extends Collection {
	constructor(options) {
		super(options);
		this.model = WishlistItem;
		this.localStorage = storage;
	}
}

export default Wishlist;