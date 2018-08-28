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


var userController = module.exports = 
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

    //home

    user_home:          function home (req, res, next)
                        {
                            console.log(req.params.id);
                            var email   =   req.params.id;
                            
                            //fetch user data

                            user =  User.findOne
                            (
                                {
                                    where:  {

                                                email_address:  email

                                            }
                                }
                            
                            ).then(user => {
                                
                                console.log('Home');
                                res.render('users-home', 
                                    {

                                        email:  email,
                                        user:   user

                                    }
                                );
                              });

                            
                            
                           
                            
                           
                        
                        },

    //create + hashing using bcrypt.
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
                                
                                                name:           req.body.name,
                                                email_address:  req.body.email,
                                                phone_number:   req.body.phone_number,
                                                location:       req.body.location,
                                                id:             id,
                                                password:       pass
                
                                              });
                                        });

                            

                            //  console.log(req.body);
                            //  res.send(req.body);
                            var email   =   req.body.email;
                            console.log(email);

                            res.redirect('/user-home/'+email);

                        },

    //validating users / auth

    validateUser:       function(req, res, next)
                        {
                        
                            User.findOne
                            (
                                {
                                    where:  {
                                                email_address: req.body.email
                                            }
                                }
                            ).
                            then(

                                    
                                    user => 
                                    {
                                        if(user)
                                        {
                                            console.log('yes');
                                        
                                        console.log(user.get('password'));
                                        var hash    =   user.get('password');
                                        bcrypt.compare( req.body.password , hash, function(err, response) {
                                            if(response) 
                                            {

                                                // Passwords match

                                                //userController.user_home(req, res);
                                                console.log(user['email_address']);
                                                var  id =    user['email_address'];
                                                res.redirect('/user-home/'+id);
                                             
                                            } 
                                            else 
                                            {

                                             // Passwords don't match
                                             res.send('Passwords don\'t match');

                                            } 
                                          });
                                        }
                                        else
                                        {
                                            res.send('no');
                                        }
                                    }
                                );
                           
                        },

    //bcrypt
    
    hashing:            function (req, res, next)
                        {
                            res.send('Hello World');
                            bcrypt.hash('myPassword', 10, function(err, hash) 
                                {
                                    // Store hash in database
                                    console.log(hash);
                                });
                            
                        },









}