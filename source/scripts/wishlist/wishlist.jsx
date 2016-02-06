import '!style!css!sass!./wishlist-base.sass';
import '!style!css!sass!./wishlist.sass';

import React from 'react';
import _ from 'lodash';
import ReactGridLayout from 'react-grid-layout';

import WishlistCollection from './wishlist-model';
import BackboneReact from '../utils/backbone-react';

class Wishlist extends BackboneReact {

	constructor(props) {
		super(props);
	}

	getBackboneCollections() {
		return [this.props.list];
	}

	render() {
		return (
			<div className='wishlist'>
				<ReactGridLayout className="layout" layout={ this.getGridLayout() } cols={6} >
					{ this.renderListItems() }
				</ReactGridLayout>
			</div>
		);
	}

	renderListItems() {
		let listItems = [];

		this.props.list.each((wish, i) => {
			let Renderer = wish.get('renderer');
			listItems.push(<div key={ i }><div className='test-div'><p>this is some text {i}</p></div></div>)
			// listItems.push(
			// 	<Renderer
			// 		key={ i }
			// 		model={ wish }
			// 		className='wishlist-item'
			// 		onRemove={ this.remove.bind(this) } />
			// );
		});

		return listItems;
	}

	getGridLayout() {
		const layout = [];
		for (var i = 0; i < this.props.list.length; i++) {
			layout.push({
				h: 1,
				w: 1,
				x: i%4,
				y: Math.floor(i/4)
			});
		}

		console.dir(layout);
		return layout;
	}

	remove(model) {
		this.props.onRemove(model);
	}
}

Wishlist.defaultProps = {
	list: new WishlistCollection(),
	onRemove: _.noop
};

Wishlist.propTypes = {
	list: React.PropTypes.instanceOf(WishlistCollection),
	onRemove: React.PropTypes.func
};

export default Wishlist;

