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
	const { location, businessName, address, city, state, zipcode, phoneNumer, email, value } = req.body;
	const { id } = req.user;

	try {
		const voucher = voucherCode.generate({
			prefix: 'lacenails-',
			pattern: '#####-#####',
			postfix: '-2020'
		});

		const newGift = {
			phone: phoneNumer,
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
		};
		// console.log(newGift);
		const gift = await models.Gift.create(newGift);

		resp.json(gift);
	} catch (error) {
		console.error(error.message);
		resp.status(500).send('Server Error');
	}
});

module.exports = router;
