const router = require('express').Router();
const auth = require('../../middleware/auth');
const models = require('../../models');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const voucherCode = require('voucher-code-generator');
//@route  POST api/gift
//@desc   CREATE gift certificate
//@access Private
router.post('/', auth, async (req, resp) => {
	try {
		const voucher = voucherCode.generate({
			prefix: 'lacenails-',
			pattern: '#####-#####',
			postfix: `-` + new Date().getFullYear() + `` + new Date().getMonth() + 1 + `` + new Date().getDate()
		});

		const { location, businessName, address, city, state, zipcode, phone, email, value } = req.body;
		const { id } = req.user;

		const gift = await models.Gift.create({
			phone,
			location,
			businessName,
			address,
			city,
			state,
			zipcode,
			email,
			created: id,
			voucher: voucher[0],
			value: value
		});

		resp.json(gift);
	} catch (error) {
		console.error(error.message);
		resp.status(500).send('Server Error');
	}
});

router.get('/', auth, async (req, resp) => {
	try {
		const { location } = req.query;
		const gifts = await models.Gift.findAll({
			where: {
				location: location
			}
		});
		resp.json(gifts);
	} catch (error) {
		console.log(error.message);
		resp.status(500).json('server error');
	}
});

module.exports = router;
