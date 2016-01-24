import '!style!css!sass!./gig.sass';
import React from 'react';

class Gig extends React.Component {
	render() {
		return (
			<div className={ 'gig ' + this.props.className } >
				{ this.props.gig.get('name') }
			</div>
		);
	}
}

Gig.defaultProps = {
	gig: {
		get: function() {
			return 'default gig';
		}
	},
	className: ''
};

Gig.propTypes = {
	gig: React.PropTypes.any,
	className: React.PropTypes.string
};

export default Gig;