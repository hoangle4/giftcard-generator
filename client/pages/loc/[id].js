import { connect } from 'react-redux';
import { getLocation } from '../../action/location';
import fetch from 'isomorphic-unfetch';
import AddGiftModal from '../../components/AddGiftModal';
import { GiftTable } from '../../components/GiftTable';

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
	updatedAt,
	gifts
}) => {
	return (
		<div>
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
				<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#staticBackdrop">
					New Gift Certificate
				</button>
				<AddGiftModal
					location={id}
					businessName={businessName}
					address={address}
					city={city}
					state={state}
					zipcode={zipcode}
				/>
			</div>
			<GiftTable gifts={gifts} />
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
	const response1 = await fetch(`http://localhost:3001/api/location/${id}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			't-auth-token': token
		}
	});
	const result1 = await response1.json();
	const response2 = await fetch(`http://localhost:3001/api/gift?location=${result1.id}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			't-auth-token': token
		}
	});
	const result2 = await response2.json();
	console.log({ ...result1, gifts: result2 });
	return { ...result1, gifts: result2 };
};

export default connect(null, { getLocation })(Loc);
