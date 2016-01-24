import { Collection } from 'Backbone';

import GigModel from './gig/gig-model.js';

class Wishlist extends Collection {
	constructor(options) {
		super(options);
		this.model = GigModel;
	}
}

export default Wishlist;