var express = require('express');
var router = express.Router();
var UserController = require('../controllers/UserController.js');

//home
router.get('/', UserController.home);
//login
router.get('/login', UserController.login);

module.exports = router;
