import '!style!css!sass!./gig.sass';
import React from 'react';

class Gig extends React.Component {
	render() {
		return (
			<div className={ 'other ' + this.props.className } >
				OTHER
			</div>
		);
	}
}

Gig.defaultProps = {
	className: ''
};

Gig.propTypes = {
	className: React.PropTypes.string
};

export default Gig;