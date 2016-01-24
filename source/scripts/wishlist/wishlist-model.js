import Backbone from 'Backbone';

import WishlistItem from './wishlist-item-model';

class Wishlist extends Backbone.Collection {
	constructor(options) {
		super(options);

		this.model = WishlistItem;
	}
}