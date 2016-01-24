import React from 'react';

class Other extends React.Component {
	render() {
		return (
			<div className={ 'other ' + this.props.className } >
				OTHER
			</div>
		);
	}
}

Other.defaultProps = {
	className: ''
};

Other.propTypes = {
	className: React.PropTypes.string
};

export default Other;