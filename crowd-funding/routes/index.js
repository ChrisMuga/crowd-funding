var express = require('express');
var router = express.Router();
//create UserController
var UserController = require('../controllers/UsersController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('register', { title: 'Crowd Funding' });
});


router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/data', function(req, res, next) {
  res.render('login');
});

//people route
router.get('/people',UserController.people);
//user registration 
router.post('/register-user',UserController.create)
//model trial
router.get('/peeps', UserController.create)

router.post('/home',UserController.auth);


module.exports = router;
