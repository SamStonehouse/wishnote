import { Model } from 'backbone';

class Gig extends Model {
	defaults() {
		return {
			artist: 'Not specified',
			cost: 0
		}
	}
}

export default Gig;