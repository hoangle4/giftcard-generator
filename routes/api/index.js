const router = require('express').Router();

const apiAuth = require('./auth');
const apiUsers = require('./users');
const apiLocation = require('./location');

// API Routes
router.use('/auth', apiAuth);
router.use('/users', apiUsers);
router.use('/location', apiLocation);
module.exports = router;
