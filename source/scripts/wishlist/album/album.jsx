import '!style!css!sass!./album.sass';
import React from 'react';

class Album extends React.Component {
	render() {
		return (
			<div className={ 'album ' + this.props.className } >
				{ this.props.model.get('artist') }
			</div>
		);
	}
}

Album.defaultProps = {
	model: {
		get: function() {
			return 'default album';
		}
	},
	className: ''
};

Album.propTypes = {
	model: React.PropTypes.any,
	className: React.PropTypes.string
};

export default Album;