const router = require('express').Router();
const jwt = require('jsonwebtoken');
const models = require('../../models');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
//@route  POST api/users
//@desc   Register user
//@access Public
router.post(
	'/',
	[
		check('name', 'name is required').not().isEmpty(),
		check('email', 'Please include a valid email').isEmail(),
		check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
	],
	async (req, resp) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return resp.status(400).json({ errors: errors.array() });
		}
		const { name, email, password } = req.body;

		try {
			let user = await models.User.findOne({ where: { email } });

			if (user) {
				return resp.status(400).json({ errors: [ { msg: 'User already exists' } ] });
			}
			const avatar = gravatar.url(email, {
				s: '200',
				r: 'pg',
				d: 'mm'
			});
			const newUser = {
				name,
				email,
				password,
				avatar
			};

			const salt = await bcrypt.genSalt(10);
			const hash = await bcrypt.hash(password, salt);

			newUser.password = hash;

			user = await models.User.create(newUser);

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
