import Backbone from 'backbone';
import LocalStorage from 'backbone.localstorage';

import OtherRenderer from './other/other.jsx';

const storage = new LocalStorage('wishnote-storage');

class WishlistItem extends Backbone.Model {

	constructor(options) {
		super(options);
		this.localStorage = storage;
	}
	
	defaults() {
		return {
			test: 'Wishlist item test',
			renderer: OtherRenderer,
			type: 'default',
			spotifyArtist: null
		};
	}
}

export default WishlistItem;