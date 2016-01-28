import WishlistItem from '../wishlist-item-model';

import GigRenderer from './gig.jsx';

class Gig extends WishlistItem {
	defaults() {
		return {
			artist: 'Not specified',
			spotifyArtist: {
				name: null,
				images: [],
				id: null
			},
			cost: 0,
			renderer: GigRenderer,
			type: Gig.type
		};
	}
}

Gig.type = 'Gig';

export default Gig;