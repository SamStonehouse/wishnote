import { Collection } from 'backbone';

import WishlistItem from './wishlist-item-model.js';

class Wishlist extends Collection {
	constructor(options) {
		super(options);
		this.model = WishlistItem;
	}
}

export default Wishlist;