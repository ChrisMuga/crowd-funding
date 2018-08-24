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
      password: {
          type: Sequelize.STRING
      }
});

module.exports = 
{



    //home
    home:   function(req, res, next) 
                        {
                            res.render('index', { title: 'Crowd-Funding' });
                        },

    //random log
    log:                function ()
                        {
                            console.log("Hello World");
                        },

    //login
    login:              function (req, res, next)
                        {

                            res.render('login');

                        },
    
    //test connection

    test_connection:    function (req, res, next)
                        {
                            sequelize.authenticate()
                                        .then(() => {
                                            res.send('Connection successful');
                                            console.log('Connection has been established successfully.');
                                        })
                                        .catch(err => {
                                            res.send('Connection Error');
                                            console.error('Unable to connect to the database:', err);
                                        });
                        },

    //users

    users:              function (req, res, next)
                        {
                            

                            //fetch

                            User.findAll().then(users => {
                            res.render('users',{users: users});
                            })
                        },

    //create
    create:             function (req, res, next)
                        {
                            //create random number
                            var id = Math.floor(Math.random() * 1100) + 1;

                            User.create({
                                name: req.body.name,
                                email_address: req.body.email_address,
                                phone_number: req.body.phone_number,
                                id: id,
                                password: req.body.password

                              });

                              console.log(req.body);
                              res.send(req.body);

                        }





}