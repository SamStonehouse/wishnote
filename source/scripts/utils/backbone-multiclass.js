import { Collection } from 'backbone';

function createMultiTypeCollection(DefaultModel, modelTypes) {
	const types = {};

	modelTypes.forEach(function(modelType) {
		if (modelType.type) {
			types[modelType.type] = modelType;
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
				return new DefaultModel(attr, options);
			};
		}
	};
}

export default createMultiTypeCollection;