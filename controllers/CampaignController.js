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

//define user model.
const Campaign = sequelize.define('campaigns',{

    user_id: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      purpose: {
        type: Sequelize.STRING
      },
      target_amount:     {
          type: Sequelize.STRING
      },
      description: {
          type: Sequelize.STRING
      },
      
});

//create CampaignController Object and export its methods and members.
var CampaignController = module.exports = 
{

    make_campaign:      function (req, res, next)
    {
        var id = Math.floor(Math.random() * 1100) + 1;
        res.send(req.body);
        Campaign.create({
            id:               id,                
            user_id:          req.body.name,
            title:            req.body.title,
            purpose:          req.body.purpose,
            target_amount:    req.body.target_amount,
            description:      req.body.description
           

          });
    }

}