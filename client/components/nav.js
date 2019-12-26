import Link from 'next/link';
import { connect } from 'react-redux';

const Nav = ({ isAuthenticated }) => {
	const links = !isAuthenticated
		? [ { href: '/signup', label: 'Sign Up' }, { href: '/login', label: 'Login' } ]
		: [ { href: '/signout', label: 'Sign Out' } ];

	return (
		<nav>
			<ul className="nav bg-dark ">
				<li className="nav-item ">
					<Link href="/">
						<a className="nav-link text-white">Home</a>
					</Link>
				</li>
				{links.map(({ href, label }, index) => (
					<li key={index} className="nav-item ">
						<Link href={href}>
							<a className="nav-link text-white">{label}</a>
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

export default connect(mapStateToProps)(Nav);
