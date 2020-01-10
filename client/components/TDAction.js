export const TDAction = () => {
	return (
		<td>
			<div className="btn-group">
				<button type="button" className="btn btn-xs btn-dark">
					<i class="far fa-eye"></i>
				</button>
				<button
					style={{ background: '#f2f2f2', border: '1px solid #343A40' }}
					type="button"
					className="btn btn-light dropdown-toggle dropdown-toggle-split"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false"
				/>
				<div className="dropdown-menu mr-5">
					<a className="dropdown-item" href="#">
						Redeem
					</a>
					<a className="dropdown-item" href="#">
						Reload
					</a>
					<a className="dropdown-item" href="#">
						Transactions
					</a>
					<a className="dropdown-item" href="#">
						Email
					</a>
					<div className="dropdown-divider" />
					<a className="dropdown-item" href="#">
						Disable
					</a>
				</div>
			</div>
		</td>
	);
};
