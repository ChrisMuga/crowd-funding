var express = require('express');
var router = express.Router();
var UserController = require('../controllers/UserController.js');

//home
router.get('/', UserController.home);
//login
router.get('/login', UserController.login);
//users
router.get('/users', UserController.users);
//create/insert
router.post('/register',  UserController.create);
//hash
router.get('/hash', UserController.hashing);
//user validation
router.post('/validate-user', UserController.validateUser);

module.exports = router;
