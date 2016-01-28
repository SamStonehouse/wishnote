import WishlistItem from '../wishlist-item-model';

import AlbumRenderer from './album.jsx';

class Album extends WishlistItem {
	defaults() {
		return {
			name: 'Not specified',
			spotifyAlbum: {
				name: null,
				images: [],
				id: null
			},
			cost: 0,
			renderer: AlbumRenderer,
			type: Album.type
		};
	}
}

Album.type = 'Album';

export default Album;