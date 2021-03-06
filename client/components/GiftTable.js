import { TDAction } from './TDAction';

export const GiftTable = ({ gifts }) => {
	return (
	<div>
		<table className="table">
			<thead>
				<tr>
					<th scope="col">Location</th>
					<th scope="col">Code</th>
					<th scope="col">Amount</th>
					<th scope="col">Date</th>
					<th scope="col">History</th>
					<th scope="col">Action</th>
				</tr>
			</thead>
			<tbody>
				{gifts.map((gift) => (
					<tr key={gift.id}>
						<th scope="row">{gift.businessName}</th>
						<td>{gift.voucher}</td>
						<td>${gift.value}.00</td>
						<td>{gift.createdAt}</td>
						<td>{gift.updatedAt}</td>
						<TDAction {...gift} />
					</tr>
				))}
			</tbody>
		</table>
	</div>
	);
};
