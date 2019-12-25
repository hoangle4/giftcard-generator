import { useEffect } from 'react';
import Head from 'next/head';
import Nav from '../components/nav';
import MyLayOut from '../components/MyLayOut';
import { connect } from 'react-redux';
import { setAuthToken } from '../utils';
import { loadUser } from '../action/auth';
const Home = ({ isAuthenticated, loadUser }) => {
	useEffect(
		() => {
			if (localStorage.getItem('token')) {
				setAuthToken(localStorage.getItem('token'));
				loadUser();
			}
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
					crossorigin="anonymous"
				/>
				<script
					src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
					integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
					crossorigin="anonymous"
				/>
				<script
					src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
					integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
					crossorigin="anonymous"
				/>
				<script
					src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
					integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
					crossorigin="anonymous"
				/>
			</Head>

			<Nav />

			<div className="hero">
				<h1 className="title">Welcome to Next.js!</h1>
			</div>

			<style jsx>{`
				.hero {
					width: 100%;
					color: #333;
				}
			`}</style>
		</MyLayOut>
	);
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { loadUser })(Home);
