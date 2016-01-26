import { Collection } from 'backbone';
import LocalStorage from 'backbone.localstorage';

import Album from './album/album-model';
import Gig from './gig/gig-model';

import WishlistItem from './wishlist-item-model.js';

const storage = new LocalStorage('wishnote-storage');

function createMultiTypeCollection() {
	let types = {};

	const args = Array.prototype.slice.call(arguments);

	args.forEach(function(type) {
		if (type.type) {
			types[type.type] = type;
		}
	});

	return class MultiTypeCollection extends Collection {
		constructor(opts) {
			super(opts);
			this.model = function(attr, options) {
				let typeNames = Object.keys(types);
				for (let i = 0; i < typeNames.length; i++) {
					if (typeNames[i] === attr.type) {

						return new types[attr.type](attr, options);
					}
				}
				return new WishlistItem(attr, options);
			};
		}
	}
}

class Wishlist extends createMultiTypeCollection(Album, Gig) {
	constructor(options) {
		super(options);
		this.localStorage = storage;
	}
}

export default Wishlist;