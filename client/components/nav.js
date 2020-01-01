import Link from 'next/link';
import { connect } from 'react-redux';
import { logout } from '../action/auth';
const Nav = ({ isAuthenticated, logout }) => {
	const links = !isAuthenticated
		? [ { href: '/signup', label: 'Sign Up' }, { href: '/login', label: 'Login' } ]
		: [ { href: '#!', label: 'Sign Out', action: logout } ];

	return (
		<nav>
			<ul className="nav bg-dark ">
				<li className="nav-item ">
					<Link href="/">
						<a className="nav-link text-white">Home</a>
					</Link>
				</li>
				{links.map(({ href, label, action }, index) => (
					<li key={index} className="nav-item ">
						<Link href={href}>
							<a className="nav-link text-white" onClick={action && action}>
								{label}
							</a>
						</Link>
					</li>
				))}
			</ul>

			{/* <style jsx>{}</style> */}
		</nav>
	);
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout })(Nav);
