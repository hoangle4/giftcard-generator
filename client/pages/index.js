import { useEffect, Fragment } from 'react';
import Nav from '../components/nav';

import { connect } from 'react-redux';
import { setAuthToken } from '../utils';
import { loadUser } from '../action/auth';
import { getLocations, clearLocations } from '../action/location';
import AddBizModal from '../components/AddBizModal';
import LocationList from '../components/LocationList';
const Home = ({ isAuthenticated, locations, loadUser, getLocations }) => {
	useEffect(
		() => {
			if (isAuthenticated) {
				locations.length === 0 && getLocations();
			} else if (!isAuthenticated && locations.length > 0) {
				clearLocations();
			}
			if (localStorage.getItem('token')) {
				setAuthToken(localStorage.getItem('token'));
				loadUser();
			}
		},
		[ isAuthenticated ]
	);

	return (
		<Fragment>
			<Nav />

			<div className="jumbotron">
				<h1 className="text-center">Gift Generator for small Business!</h1>
				<hr className="my-4" />
				<p>We provide free gift card management system for small businesses.</p>
				{isAuthenticated && (
					<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#staticBackdrop">
						Add a Location
					</button>
				)}
			</div>
			{locations.length === 0 ? (
				<div className="media">
					<div className="media-body">
						<h5 className="mt-0">Locations Not Found, Please add new Location</h5>
					</div>
				</div>
			) : (
				locations.map((location) => <LocationList key={location.id} {...location} />)
			)}

			<AddBizModal />
		</Fragment>
	);
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
	locations: state.location.locations
});

export default connect(mapStateToProps, { loadUser, getLocations })(Home);
