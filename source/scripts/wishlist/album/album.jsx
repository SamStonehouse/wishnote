import '!style!css!sass!./album.sass';
import React from 'react';

class Album extends React.Component {
	render() {
		return (
			<div className={ 'album ' + this.props.className } >
				{ this.props.album.get('name') }
			</div>
		);
	}
}

Album.defaultProps = {
	album: {
		get: function() {
			return 'default album';
		}
	},
	className: ''
};

Album.propTypes = {
	album: React.PropTypes.any,
	className: React.PropTypes.string
};

export default Album;