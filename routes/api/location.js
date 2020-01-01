const router = require('express').Router();
const models = require('../../models');
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const Op = require('sequelize').Op;
router.post(
	'/',
	auth,
	[
		check('businessName', 'Business name is required').not().isEmpty(),
		check('email', 'Please include a valid email').isEmail(),
		check('phoneNumber', 'Phone number is required').not().isEmpty()
	],
	async (req, resp) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return resp.status(400).json({ errors: errors.array() });
		}
		const { businessName, address, city, state, zipcode, phoneNumber, email } = req.body;

		try {
			let business = await models.BizLocation.findOne({
				where: {
					[Op.or]: [ { email: email }, { phoneNumber: phoneNumber } ]
				}
			});
			if (business) return resp.status(403).json({ msg: 'Business Already Exsist' });

			business = await models.BizLocation.create({
				businessName,
				address,
				city,
				state,
				zipcode,
				phoneNumber,
				email,
				admin: req.user.id
			});

			resp.json(business);
		} catch (error) {
			console.error(error.message);
			resp.status(500).send('Server error');
		}
	}
);

router.get('/', auth, async (req, resp) => {
	try {
		const businesses = await models.BizLocation.findAll({
			where: {
				admin: req.user.id
			}
		});
		console.log(businesses);
		resp.json(businesses);
	} catch (err) {
		console.log(err);
		resp.status(500).json({ msg: 'SERVER ERROR' });
	}
});

router.get('/:id', auth, async (req, resp) => {
	try {
		const business = await models.BizLocation.findByPk(req.params.id);
		resp.json(business);
	} catch (err) {
		console.log(err);
		resp.status(500).json({ msg: 'SERVER ERROR' });
	}
});

module.exports = router;
