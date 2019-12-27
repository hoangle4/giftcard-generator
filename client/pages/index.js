import { useEffect } from 'react';
import Head from 'next/head';
import Nav from '../components/nav';
import MyLayOut from '../components/MyLayOut';
import { connect } from 'react-redux';
import { setAuthToken } from '../utils';
import { loadUser } from '../action/auth';
import { getLocations } from '../action/location';
import  AddBizModal  from '../components/AddBizModal';
import  LocationList  from '../components/LocationList';
const Home = ({ isAuthenticated, locations, loadUser, getLocations }) => {
	useEffect(
		() => {
			if(isAuthenticated) {
				getLocations();
				return;
			};

			if (localStorage.getItem('token')) {
				setAuthToken(localStorage.getItem('token'));
				loadUser();
			};

		},
		[ isAuthenticated ]
	);

	return (
		<MyLayOut>
			<Head>
				<title>Home</title>
				<link rel="icon" href="/favicon.ico" />
				<link
					rel="stylesheet"
					href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
					integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
					crossOrigin="anonymous"
				/>
				<script
					src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
					integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
					crossOrigin="anonymous"
				/>
				<script
					src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
					integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
					crossorigin="anonymous"
				/>
				<script
					src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
					integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
					crossOrigin="anonymous"
				/>
			</Head>

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
			) : (locations.map(location =><LocationList key={location.id} {...location} />))}


			<AddBizModal />

		</MyLayOut>
	);
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
	locations:state.location.locations
});

export default connect(mapStateToProps, { loadUser, getLocations })(Home);
