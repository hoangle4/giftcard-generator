import React from 'react';
import Head from 'next/head';
import Nav from '../components/nav';
import MyLayOut from '../components/MyLayOut';
const Home = () => (
	<MyLayOut>
		<Head>
			<title>Home</title>
			<link rel="icon" href="/favicon.ico" />
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

export default Home;
