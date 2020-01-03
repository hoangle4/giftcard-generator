import { useState } from 'react';
import { connect } from 'react-redux';
import { createGift } from '../action/gift';
const AddGiftModal = ({ createGift, location, businessName, address, city, state, zipcode }) => {
	const [ formData, setFormData ] = useState({
		value: '',
		email: '',
		phone: ''
	});

	const { value, phone, email } = formData;

	const handleOnInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

	const handleAddLocation = async (e) => {
		e.preventDefault();

		createGift({ ...formData, location, businessName, address, city, state, zipcode });
		e.target.previousSibling.click();
		setFormData({
			value: '',
			phone: '',
			email: ''
		});
	};

	return (
		<div
			className="modal fade"
			id="staticBackdrop"
			data-backdrop="static"
			tabIndex="-1"
			role="dialog"
			aria-labelledby="staticBackdropLabel"
			aria-hidden="true"
		>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title" id="staticBackdropLabel">
							New Gift Certificate
						</h5>
						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">
						<form>
							<div className="form-group">
								<label htmlFor="value">Amount</label>
								<input
									onChange={handleOnInputChange}
									name="value"
									type="number"
									className="form-control"
									id="value"
									value={value}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="phone">Phone Number</label>
								<input
									onChange={handleOnInputChange}
									name="phone"
									type="text"
									className="form-control"
									id="phone"
									value={phone}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="email">Email</label>
								<input
									onChange={handleOnInputChange}
									name="email"
									type="email"
									className="form-control"
									id="email"
									value={email}
								/>
							</div>
						</form>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-secondary" data-dismiss="modal">
							Close
						</button>
						<button type="button" className="btn btn-primary" onClick={handleAddLocation}>
							Save
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default connect(null, { createGift })(AddGiftModal);
