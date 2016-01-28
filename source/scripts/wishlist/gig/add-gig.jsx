import '!style!css!sass!./add-gig.sass';

import React from 'react';

import SpotifyUtils from '../../utils/spotify/spotify-utils';
import Gig from './gig-model.js';

class AddGig extends React.Component {

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
			<div className='add-gig-container'>
				<label>Artist:
					<input type='text' value={ artist } onChange={ this.handleAristChange.bind(this) } />
				</label>
				<label>Cost:
					<input type='text' value={ cost } onChange={ this.handleCostChange.bind(this) } />
				</label>
				<button className='add add-gig' onClick={ this.add.bind(this) }>Add</button>
			</div>
		);
	}

	add() {
		let gig = new Gig({
			artist: this.state.artist,
			cost: this.state.cost
		});

		this.setState({
			artist: '',
			cost: ''
		});

		SpotifyUtils.getArtistData(gig.get('artist')).then(function(artists) {
			if (artists.length > 0) {
				gig.set({ spotifyArtist: artists[0] });
				gig.save();
			}
		});

		this.props.onAdd(gig);
	}
}

AddGig.defaultProps = {
	onAdd: function() {}
};

AddGig.propTypes = {
	onAdd: React.PropTypes.func
};

export default AddGig;