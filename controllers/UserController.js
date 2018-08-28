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
                            bcrypt.hash(req.body.password, 10, function(err, hash) 
                                        {
                                            // Store hash in database
                                            console.log(hash);
                                            pass    =   hash;
                                            User.create({
                                
                                                name: req.body.name,
                                                email_address: req.body.email,
                                                phone_number: req.body.phone_number,
                                                id: id,
                                                password: pass
                
                                              });
                                        });

                            

                              console.log(req.body);
                              res.send(req.body);

                        },

    //bcrypt
    
    hashing:            function (req, res, next)
                        {
                            res.send('Hello World');
                            bcrypt.hash('myPassword', 10, function(err, hash) {
                                // Store hash in database
                                console.log(hash);
                              });
                            
                        }






}