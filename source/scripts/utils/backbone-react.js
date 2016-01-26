import React from 'react';

class BackboneReact extends React.Component {
	componentDidMount() {
		this.getBackboneCollections().forEach((collection) => {
			collection.on('add remove change', () => {
				console.log('change');
				this.forceUpdate.call(this);
			});
		});
	}

	componentWillUnmount() {
		this.getBackboneCollections().forEach((collection) => {
			collection.off(null, null, this);
		});
	}
}

export default BackboneReact;