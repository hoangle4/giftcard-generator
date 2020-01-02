const jwt = require('jsonwebtoken');
module.exports = function(req, resp, next) {
	// GET TOKEN FROM HEADER

	const token = req.header('t-auth-token');

	//CHECK IF NO TOKEN

	if (!token) return resp.status(401).json({ msg: 'Authorization Denied' });

	//VERIFY TOKEN

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		req.user = decoded.user;

		next();
	} catch (error) {
		resp.status(401).json({ msg: 'Authorization is not valid' });
	}
};
