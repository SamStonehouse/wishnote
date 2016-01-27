import WishlistItem from '../wishlist-item-model';
import AlbumRenderer from './album.jsx';

class Album extends WishlistItem {
	defaults() {
		return {
			artist: 'Not specified',
			cost: 0,
			renderer: AlbumRenderer,
			type: Album.type
		};
	}
}

Album.type = 'Album';

export default Album;