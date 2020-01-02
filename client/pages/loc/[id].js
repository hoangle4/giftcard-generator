import { connect } from 'react-redux';
import { getLocation } from '../../action/location';
import fetch from 'isomorphic-unfetch';

const Loc = ({
	id,
	businessName,
	address,
	city,
	state,
	zipcode,
	phoneNumber,
	email,
	avatar,
	admin,
	createdAt,
	updatedAt
}) => {
	return (
		<div className="jumbotron">
			<h1 className="display-4">{businessName}</h1>
			<p>
				{address}
				{city}
				{state}
				{zipcode}
			</p>
			<hr className="my-4" />
			<p>Established: {createdAt}</p>
			<a className="btn btn-primary btn-lg" href="#!" role="button">
				New Gift Certificate
			</a>
		</div>
	);
};

Loc.getInitialProps = async ({ res, query, isServer }) => {
	if (isServer) {
		res.writeHead(302, {
			Location: '/'
		});
		res.end();
	}

	const { id } = query;
	const token = localStorage.getItem('token');
	const response = await fetch(`http://localhost:3001/api/location/${id}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			't-auth-token': token
		}
	});
	const result = await response.json();
	console.log(result);

	return result;
};

export default connect(null, { getLocation })(Loc);
