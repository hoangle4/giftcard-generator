import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import MyLayOut from '../../../components/MyLayOut';
import AddStatement from '../../../components/AddStatement';

const MainAddStatement = ({ isAuthenticated }) => {
	const Router = useRouter();
	useEffect(
		() => {
			if (!isAuthenticated) {
				Router.push('/');
			}
		},
		[ isAuthenticated ]
	);
	const [ employee, setEmployee ] = useState(3);

	const [ formData, setFormData ] = useState({});
	const [ altFormData, seAltFormData ] = useState({});
	const [ cash, setCash ] = useState({});

	const handleSetCash = (e) => setCash({ ...cash, [e.target.name]: parseInt(e.target.value) });

	const handleNewEmployee = (e) => {
		const newData = {
			name: e.target.value,
			day: '',
			v: '',
			t: ''
		};

		setFormData({
			...formData,
			[e.target.id]: { ...newData }
		});
	};

	const handleOnInputChange = (e) => {
		setFormData({
			...formData,
			[e.target.id]: {
				...formData[e.target.id],
				[e.target.name]: e.target.value
			}
		});
	};

	const handleSubmit = async (e) => {};

	return (
		<MyLayOut>
			<div className="row">
				<div className="col-md-12">
					<h3 className="text-center">Add Statement</h3>
					<button
						onClick={(e) => {
							e.preventDefault();
							setEmployee(employee + 1);
						}}
						style={{
							position: 'relative',
							left: '95%',
							top: '50%',
							transform: 'translateY(-50%)'
						}}
						className="btn btn-sm btn-success"
					>
						Add
					</button>
				</div>
			</div>

			<AddStatement
				formData={formData}
				setFormData={handleOnInputChange}
				setNewEmployee={handleNewEmployee}
				handleSubmit={handleSubmit}
				cash={cash}
				setCash={handleSetCash}
				employee={employee}
				setEmployee={setEmployee}
			/>
		</MyLayOut>
	);
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(MainAddStatement);
