import WishlistItem from '../wishlist-item-model.js';

import GigRenderer from './gig.jsx';

class Gig extends WishlistItem {
	defaults() {
		return {
			artist: 'Not specified',
			cost: 0,
			type: 'gig',
			renderer: GigRenderer
		};
	}
}

export default Gig;