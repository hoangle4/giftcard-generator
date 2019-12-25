const router = require('express').Router();
const auth = require('../../middleware/auth');
const models = require('../../models');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

//@route  POST api/auth
//@desc   Get Auth user
//@access Private
router.get('/', auth, async (req, resp) => {
	console.log(req.user.id);
	try {
		const user = await models.User.findByPk(req.user.id);
		console.log('a');
		resp.json(user);
	} catch (error) {
		console.error(error);
		resp.status(500).send('Server Error');
	}
});

//@route  POST api/auth
//@desc   Authenticate user & get token
//@access Public
router.post(
	'/',
	[ check('email', 'Please include a valid email').isEmail(), check('password', 'Password is required').exists() ],
	async (req, resp) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return resp.status(400).json({ errors: errors.array() });
		}
		const { email, password } = req.body;

		try {
			let user = await models.User.findOne({ where: { email } });

			if (!user) return resp.status(400).json({ errors: [ { msg: 'Invalid Credentials' } ] });

			const isMatch = await bcrypt.compare(password, user.password);

			if (!isMatch) return resp.status(400).json({ errors: [ { msg: 'Invalid Credentials' } ] });

			const payload = { user: { id: user.id } };

			jwt.sign(payload, process.env.JWT_SECRET, (err, token) => {
				if (err) throw err;
				resp.json(token);
			});
		} catch (error) {
			console.error(error.message);
			resp.status(500).send('Server error');
		}
	}
);

module.exports = router;
