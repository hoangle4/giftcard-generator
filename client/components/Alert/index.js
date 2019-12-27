import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
const Alert = ({ alerts }) =>
	alerts !== null &&
	alerts.length > 0 &&
	alerts.map((alert) => (
		<div
			key={alert.id}
			style={{
				width: '35vw',
				 margin: 'auto',
				 position:'absolute',
				 left:'50%',
				 top:'5%',
				 transform:'translateX(-50%)'
			 }}
				 className={`alert alert-${alert.alertType}`}
				 >
			<div className="header">{alert.msg}</div>
			{/* <p>That offer has expired</p> */}
		</div>
	));

Alert.propTypes = {
	alerts: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
	alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
