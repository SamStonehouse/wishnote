import '!style!css!sass!./add-album.sass';

import React from 'react';

import SpotifyUtils from '../../utils/spotify/spotify-utils';
import Album from './album-model.js';

class AddAlbum extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			name: '',
			cost: ''
		};
	}

	handleNameChange(event) {
		this.setState({ name: event.target.value });
	}

	handleCostChange(event) {
		this.setState({ cost: event.target.value });
	}

	render() {
		let name = this.state.name;
		let cost = this.state.cost;

		return (
			<div className='add-album-container'>
				<label>Name:
					<input type='text' value={ name } onChange={ this.handleNameChange.bind(this) } />
				</label>
				<label>Cost:
					<input type='text' value={ cost } onChange={ this.handleCostChange.bind(this) } />
				</label>
				<button className='add add-album' onClick={ this.add.bind(this) }>Add</button>
			</div>
		);
	}

	add() {
		let album = new Album({
			name: this.state.name,
			cost: this.state.cost
		});

		// Reset state
		this.setState({
			name: '',
			cost: ''
		});

		SpotifyUtils.getAlbumData(album.get('name')).then(function(albums) {
			if (albums.length > 0) {
				album.set({ spotifyAlbum: albums[0] });
				album.save();
				console.log('set');
			}
		});

		this.props.onAdd(album);
	}
}

AddAlbum.defaultProps = {
	onAdd: function() {}
};

AddAlbum.propTypes = {
	onAdd: React.PropTypes.func
};

export default AddAlbum;