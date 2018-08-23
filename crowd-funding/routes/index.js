var express = require('express');
var router = express.Router();
var UserController = require('../controllers/UserController.js');

//home
router.get('/', UserController.home);
//login
router.get('/login', UserController.login);
//test-connection
router.get('/test', UserController.display);

module.exports = router;
