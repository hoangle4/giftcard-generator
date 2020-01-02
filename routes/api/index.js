const router = require('express').Router();

const apiAuth = require('./auth');
const apiUsers = require('./users');
const apiLocation = require('./location');
const apiGift = require('./gift');

// API Routes
router.use('/auth', apiAuth);
router.use('/users', apiUsers);
router.use('/location', apiLocation);
router.use('/gift', apiGift);
module.exports = router;
