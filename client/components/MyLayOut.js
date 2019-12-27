import Alert from './Alert'
const layoutStyle = {
	margin: 20,
	padding: 20,
	border: '1px solid #DDD'
};

const Layout = ({ children }) => {
	return (
		<div style={layoutStyle}>
			<Alert />
			{children}
		</div>
	);
};

export default Layout;
