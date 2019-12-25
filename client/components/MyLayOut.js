const layoutStyle = {
	margin: 20,
	padding: 20,
	border: '1px solid #DDD'
};

const Layout = ({ children }) => {
	return <div style={layoutStyle}>{children}</div>;
};

export default Layout;
