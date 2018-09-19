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
        res.send(req.body);
        Campaign.create({
                                
            name:           req.body.name,
            email_address:  req.body.email,
            phone_number:   req.body.phone_number,
            location:       req.body.location,
            id:             id,
            password:       pass

          });
    }

}