import WishlistItem from '../wishlist-item-model';

import AlbumRenderer from './album.jsx';

class Album extends WishlistItem {
	defaults() {
		return {
			artist: '',
			cost: 0,
			type: 'album',
			renderer: AlbumRenderer
		}
	}
}