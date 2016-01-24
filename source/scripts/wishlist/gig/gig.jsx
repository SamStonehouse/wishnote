import '!style!css!sass!./gig.sass';
import React from 'react';

class Gig extends React.Component {
	render() {
		return (
			<div className={ 'gig ' + this.props.className } >
				{ this.props.model.get('artist') }
			</div>
		);
	}
}

Gig.defaultProps = {
	model: {
		get: function() {
			return 'default gig';
		}
	},
	className: ''
};

Gig.propTypes = {
	model: React.PropTypes.any,
	className: React.PropTypes.string
};

export default Gig;