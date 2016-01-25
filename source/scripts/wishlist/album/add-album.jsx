import '!style!css!sass!./add-album.sass';
import React from 'react';

import Album from './album-model.js';

class AddAlbum extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			artist: '',
			cost: ''
		};
	}

	handleAristChange(event) {
		this.setState({ artist: event.target.value });
	}

	handleCostChange(event) {
		this.setState({ cost: event.target.value });
	}

	render() {
		let artist = this.state.artist;
		let cost = this.state.cost;

		return (
			<div className='add-album-container'>
				<label>Artist:
					<input type='text' value={ artist } onChange={ this.handleAristChange.bind(this) } />
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
			artist: this.state.artist,
			cost: this.state.cost
		});

		this.setState({
			artist: '',
			cost: ''
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