//sequelize definintions
const Sequelize = require('sequelize');
const sequelize = new Sequelize('crowd-funding', 'rootx', 'rootx', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

});
//sequelize definintions.

//bcrypt

const   bcrypt = require('bcrypt');
var     pass;

//bcrypt

//define user model.
const User = sequelize.define('users',{

    name: {
        type: Sequelize.STRING
      },
      email_address: {
        type: Sequelize.STRING
      },
      phone_number: {
        type: Sequelize.STRING
      },
      location:     {
          type: Sequelize.STRING
      },
      password: {
          type: Sequelize.STRING
      }
});

//create CampaignController Object and export its methods and members.
var CampaignController = module.exports = 
{

    make_campaign:      function (req, res, next)
    {
        res.send(req.body);
    }

}