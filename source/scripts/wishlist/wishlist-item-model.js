import Backbone from 'backbone';

import OtherRenderer from './other/other.jsx';

class WishlistItem extends Backbone.Model {
	defaults() {
		return {
			test: 'Wishlist item test',
			renderer: OtherRenderer,
			type: 'default'
		};
	}
}

export default WishlistItem;