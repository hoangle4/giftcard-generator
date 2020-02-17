import { useState, memo } from 'react';
import EmployeeCol from './EmployeeCol';

const AddStatement = memo(
	({ handleSubmit, formData, setFormData, setNewEmployee, cash, setCash, setEmployee, employee }) => {
		const [ colLength, c ] = useState(8);
		const [ weekLength, w ] = useState([
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday'
		]);
		return (
			<form onSubmit={handleSubmit}>
				<div className="row ">
					<div className="col px-0">
						<ul className="list-group">
							{[ 'Name', ...weekLength ].map((item, index) => (
								<li key={index} className="list-group-item p-0 border-0">
									<input
										type="text"
										onChange={() => {}}
										disabled
										className="form-control"
										value={item}
									/>
								</li>
							))}
						</ul>
					</div>
					<div className="col px-0 ">
						<ul className="list-group">
							{[ 'Cash', ...weekLength ].map(
								(item, index) =>
									index <= 0 ? (
										<li key={index} className="list-group-item p-0 border-0 ">
											<input
												onChange={() => {}}
												type="disabled"
												disabled
												className="form-control "
												value={item}
											/>
										</li>
									) : (
										<li key={index} className="list-group-item p-0 border-0 ">
											<input
												type="number"
												onChange={setCash}
												name={item}
												className="form-control"
												placeholder="Enter Numbers..."
												value={cash[item]}
											/>
										</li>
									)
							)}
						</ul>
					</div>
					{[ ...Array(employee) ].map((e, index) => (
						<div key={index} className="col px-0 ">
							<ul className="list-group font-weight-bold ">
								<EmployeeCol
									setFormData={setFormData}
									formData={formData}
									colLength={colLength}
									weekLength={weekLength}
									setNewEmployee={setNewEmployee}
								/>
							</ul>
						</div>
					))}
				</div>
			</form>
		);
	}
);

export default AddStatement;
