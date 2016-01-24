import '!style!css!sass!./wishlist.sass';

import React from 'react';

import WishlistCollection from './wishlist-model';

class Wishlist extends React.Component {
	render() {
		return (
			<div className='wishlist'>
				{ this.renderListItems() }
			</div>
		);
	}

	renderListItems() {
		let listItems = [];

		for (let i in this.props.list.models) {
			if (this.props.list.models.hasOwnProperty(i)) {
				console.log(this.props.list.models[i].get('type'));
				listItems.push(this.props.list.models[i].renderer);
			}
		}

		return listItems;
	}
}

Wishlist.defaultProps = {
	list: new WishlistCollection()
};

Wishlist.propTypes = {
	list: React.PropTypes.any
};

export default Wishlist;