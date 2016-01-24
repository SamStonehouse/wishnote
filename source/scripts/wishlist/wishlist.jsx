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

		this.props.list.each(function(wish, i) {
			let Renderer = wish.get('renderer');
			listItems.push(
				<Renderer key={i} model={ wish } />
			);
		});

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