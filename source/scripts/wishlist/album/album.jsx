import '!style!css!sass!./album.sass';

import React from 'react';
import _ from 'lodash';

class Album extends React.Component {
	render() {
		return (
			<div className={ 'album ' + this.props.className } >
				{ this.props.model.get('artist') }
				<button onClick={ this.remove.bind(this) }>Remove</button>
			</div>
		);
	}

	remove() {
		this.props.onRemove(this.props.model);
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