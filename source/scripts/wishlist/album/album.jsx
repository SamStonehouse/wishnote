import '!style!css!sass!./album.sass';

import React from 'react';
import _ from 'lodash';

class Album extends React.Component {
	render() {
		return (
			<div className={ 'album ' + this.props.className } style={ this.getTileStyle() }>
				<p className='name'>{ this.props.model.get('name') }</p>
				<p className='cost'> { this.props.model.get('cost') }</p>
				<button onClick={ this.remove.bind(this) }>I got tickets!</button>
				<button onClick={ this.remove.bind(this) }>Remove</button>
			</div>
		);
	}

	remove() {
		this.props.onRemove(this.props.model);
	}

	getTileStyle() {
		const spotifyAlbum = this.props.model.get('spotifyAlbum');
		if (spotifyAlbum && spotifyAlbum.images.length > 0) {
			return {
				backgroundImage: 'url(\'' + spotifyAlbum.images[0] + '\')'
			};
		}

		return {};
	}
}

Album.defaultProps = {
	model: {
		get: function() {
			return 'default album';
		}
	},
	className: '',
	onRemove: _.noop
};

Album.propTypes = {
	model: React.PropTypes.any,
	className: React.PropTypes.string,
	onRemove: React.PropTypes.func
};

export default Album;