import React from 'react';
import Link from 'next/link';

const links = [ { href: '/signup', label: 'Sign Up' }, { href: '/login', label: 'Login' } ].map((link) => {
	link.key = `nav-link-${link.href}-${link.label}`;
	return link;
});

const Nav = () => (
	<nav>
		<ul className="nav">
			<li className="nav-item">
				<Link href="/">
					<a className="nav-link">Home</a>
				</Link>
			</li>
			{links.map(({ key, href, label }) => (
				<li key={key} className="nav-item">
					<Link href={href}>
						<a className="nav-link">{label}</a>
					</Link>
				</li>
			))}
		</ul>

		{/* <style jsx>{}</style> */}
	</nav>
);

export default Nav;
