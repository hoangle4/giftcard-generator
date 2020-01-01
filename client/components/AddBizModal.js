import { useState } from 'react';
import { connect } from 'react-redux';
import { createLocation } from '../action/location';
const AddBizModal = ({ createLocation }) => {
	const [ formData, setFormData ] = useState({
		businessName: '',
		address: '',
		city: '',
		state: '',
		zipcode: '',
		phoneNumber: '',
		email: ''
	});

	const { businessName, address, city, state, zipcode, phoneNumber, email } = formData;

	const handleOnInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

	const handleAddLocation = async (e) => {
		e.preventDefault();

		createLocation(formData);
		e.target.previousSibling.click();
		setFormData({
			...formData,
			businessName: '',
			address: '',
			city: '',
			state: '',
			zipcode: '',
			phoneNumber: '',
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
							Add Location
						</h5>
						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">
						<form>
							<div className="form-group">
								<label htmlFor="businessName">Business Name</label>
								<input
									onChange={handleOnInputChange}
									name="businessName"
									type="text"
									className="form-control"
									id="businessName"
									value={businessName}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="address">Address</label>
								<input
									onChange={handleOnInputChange}
									name="address"
									type="text"
									className="form-control"
									id="address"
									value={address}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="city">City</label>
								<input
									onChange={handleOnInputChange}
									name="city"
									type="text"
									className="form-control"
									id="city"
									value={city}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="state">State</label>
								<input
									onChange={handleOnInputChange}
									name="state"
									type="text"
									className="form-control"
									id="state"
									value={state}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="zipcode">ZIP Code</label>
								<input
									onChange={handleOnInputChange}
									name="zipcode"
									type="text"
									className="form-control"
									id="zipcode"
									value={zipcode}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="phoneNumber">Phone Number</label>
								<input
									onChange={handleOnInputChange}
									name="phoneNumber"
									type="text"
									className="form-control"
									id="phoneNumber"
									value={phoneNumber}
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

export default connect(null, { createLocation })(AddBizModal);
