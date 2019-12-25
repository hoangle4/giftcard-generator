const router = require('express').Router();

const apiAuth = require('./auth');
const apiUsers = require('./users');

// API Routes
router.use('/auth', apiAuth);
router.use('/users', apiUsers);
module.exports = router;
