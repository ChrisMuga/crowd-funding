var express = require('express');
var router = express.Router();
var UserController = require('../controllers/UserController.js');

/* GET home page. */
router.get('/', UserController.home);

module.exports = router;
