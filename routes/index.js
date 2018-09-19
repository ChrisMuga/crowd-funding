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
// user-home
router.get('/user-home/:id', UserController.user_home);
//create-campaign
router.get('/create-campaign', UserController.create_campaign);
//go to contributions page
router.get('/contribute', UserController.contribute);
//create campaign
router.post('/make-campaign',UserController.make_campaign);

module.exports = router;
