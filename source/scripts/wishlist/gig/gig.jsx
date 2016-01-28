import '!style!css!sass!./gig.sass';

import React from 'react';
import _ from 'lodash';

class Gig extends React.Component {
	render() {
		return (
			<div className={ 'gig ' + this.props.className } style={ this.getTileStyle() }>
				<p className='artist'>{ this.props.model.get('artist') }</p>
				<p className='cost'> { this.props.model.get('cost') }</p>
				<button onClick={ this.remove.bind(this) }>I got tickets!</button>
				<button onClick={ this.remove.bind(this) }>Remove</button>
			</div>
		);
	}

	getImageUrls() {
		const spotifyArtist = this.props.model.get('spotifyArtist');

		if (spotifyArtist) {
			return spotifyArtist.images.join(' ');
		}

		return '';
	}

	getTileStyle() {
		const spotifyArtist = this.props.model.get('spotifyArtist');
		if (spotifyArtist && spotifyArtist.images.length > 0) {
			return {
				backgroundImage: 'url(\'' + spotifyArtist.images[0] + '\')'
			};
		}

		return {};
	}

	remove() {
		this.props.onRemove(this.props.model);
	}
}

Gig.defaultProps = {
	model: {
		get: function() {
			return 'default gig';
		}
	},
	className: '',
	onRemove: _.noop
};

Gig.propTypes = {
	model: React.PropTypes.any,
	className: React.PropTypes.string,
	onRemove: React.PropTypes.func
};

export default Gig;