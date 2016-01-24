import WishlistItem from '../wishlist-item-model';

import GigRenderer from '../gig.jsx';

class Gig extends WishlistItem {
	defaults() {
		return {
			artist: '',
			cost: 0,
			type: 'gig',
			renderer: GigRenderer
		}
	}
}