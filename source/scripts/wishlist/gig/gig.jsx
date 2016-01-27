import '!style!css!sass!./gig.sass';

import React from 'react';
import _ from 'lodash';

class Gig extends React.Component {
	render() {
		return (
			<div className={ 'gig ' + this.props.className } >
				{ this.props.model.get('artist') }
				<button onClick={ this.remove.bind(this) }>Remove</button>
			</div>
		);
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