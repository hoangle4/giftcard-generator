// pages/_app.js
import React from 'react';
import store from '../store';
import { Provider } from 'react-redux';
import App from 'next/app';
import withRedux from 'next-redux-wrapper';
import Head from 'next/head';
import MyLayOut from '../components/MyLayOut';
import Nav from '../components/nav';

class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

		return { pageProps };
	}

	render() {
		const { store, pageProps, Component } = this.props;
		return (
			<Provider store={store}>
				<Head>
					<title>Home</title>
					<link rel="icon" href="/favicon.ico" />
					<link
						rel="stylesheet"
						href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
						integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
						crossOrigin="anonymous"
					/>
					<script src="https://kit.fontawesome.com/24b6b92c74.js" crossOrigin="anonymous"></script>
					<script
						src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
						integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
						crossOrigin="anonymous"
					/>
					<script
						src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
						integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
						crossOrigin="anonymous"
					/>
					<script
						src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
						integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
						crossOrigin="anonymous"
					/>
				</Head>
				<MyLayOut>
					<Nav />

					<Component {...pageProps} />
				</MyLayOut>
			</Provider>
		);
	}
}

export default withRedux(store)(MyApp);
