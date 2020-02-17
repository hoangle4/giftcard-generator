import PropTypes from 'prop-types';
import { Fragment, useState } from 'react';
import uuid from 'uuid';
const EmployeeCol = ({ colLength, setFormData, formData, setNewEmployee, weekLength }) => {
	const [ name, setName ] = useState('');
	const [ uniqueID, setUniqueID ] = useState(uuid());
	return (
		<Fragment>
			{[ ...Array(colLength) ].map(
				(item, index) =>
					index <= 0 ? (
						<li key={index} className="list-group-item p-0 border-0 ">
							<input
								onChange={(e) => {
									setName(e.target.value);
									setNewEmployee(e);
								}}
								id={uniqueID}
								placeholder="Please Enter Name..."
								type="text"
								className="form-control"
								value={name}
								autoComplete="new-password"
							/>
						</li>
					) : (
						<li key={index} className="list-group-item p-0 border-0 ">
							<div className="input-group">
								<input
									id={uniqueID}
									disabled={name === '' ? true : false}
									onChange={setFormData}
									type="number"
									name="v"
									data-employee={name}
									data-day={weekLength[index - 1]}
									className="form-control"
									autoComplete="new-password"
								/>
								<input
									id={uniqueID}
									disabled={name === '' ? true : false}
									onChange={setFormData}
									type="number"
									name="t"
									data-employee={name}
									data-day={weekLength[index - 1]}
									className="form-control"
									autoComplete="new-password"
								/>
							</div>
						</li>
					)
			)}
		</Fragment>
	);
};

EmployeeCol.propTypes = {};

export default EmployeeCol;
