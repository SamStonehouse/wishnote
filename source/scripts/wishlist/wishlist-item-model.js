import Backbone from 'backbone';

import OtherRenderer from './other.jsx';

class WishlistItem extends Backbone.Model {
	defaults() {
		return {
			type: '',
			test: 'Wishlist item test',
			renderer: OtherRenderer
		}
	}
}

export default WishlistItem;