
var config = require('../config');
var bcrypt = require('bcrypt-nodejs')
var model = require('mysql-model');
var MyAppModel = model.createConnection(config);
var User = MyAppModel.extend({
    tableName: "users",
});
module.exports = {

    //fetch users
    people: function(req, res, next) {
        req.getConnection(function(error, conn) {
      
            conn.query('SELECT * FROM users',function(err, rows, fields) {
                //if(err) throw err
                if (err) 
                {
                    res.send('error')
                } 
                else 
                {
                    // render to views/user/list.ejs template file
                    res.render('users', {
                        
                        data: rows
                    })
                }
      
            })
        })
      }
      //fetch users

      ,

      //register users

      register_user: function ( req, res, next )
    
      {
        
        var hash = bcrypt.hashSync(req.body.password);
        
         //set variables
        var user = {

            name:           req.body.name,
            email_address:  req.body.email_address,
            phone_number:   req.body.phone_number,
            password:       hash

        }
        //set variable
        console.log(user.name);
        
        //run the query
        req.getConnection(function(error, conn) {
            conn.query('INSERT INTO users SET ?', user, function(err, result) {
                
                if (err) {
                    console.log(err);
                    res.render(
                        'register',
                        {
                            msg:    "Something went wrong",
                            code:   0
                        }
                    );
                } else {                
                res.render(

                    'login',

                    {
                        msg:    "Registration Successful",
                        code:   1
                    }


                
                        );
                }
            })
        })
        //run the query

      }

      //register users

      ,

      create: function (req,res,next)
      {
        
           
          user = new User();
          var hash = bcrypt.hashSync(req.body.password);

          var user_data = {

            name:           req.body.name,
            email_address:  req.body.email_address,
            phone_number:   req.body.phone_number,
            password:       hash

        }


        user = new User(user_data);
        // Will create new record

        user.save(function(err, rows, fields) {

            if(err)
            {
                res.render(

                    'register',

                    {
                        msg:    "Something went wrong",
                        code:   2
                    }
                )
              
            }
            else
            {
                res.render(

                    'login',
    
                    {
                        msg:    "Registration Successful",
                        code:   1
                    }
                )
            }
        })

       
        
       


      },

      auth:function (req,res,next)
      {
        var password;
        var name;
        user = new User;
        user = user.find('first', {where: "email_address = '"+req.body.email_address+"'"}, 
                function(err, row) 
                {
                    if (err)
                    {
                        console.log(err)
                    }
                    else
                    {
                        console.log(row.password)
                        console.log(row.name)
                        console.log(req.body.email_address)
                        console.log(req.body.password)

                        //validate password using bcrypt-nodejs.

                        if (bcrypt.compareSync(req.body.password, row.password) )
                            {
                                res.render('home',
                                    {
                                        name: row.name,
                                        msg:"Welcome",
                                        code: 1,
                                    })
                            }
                        else
                            {
                                res.send( 'No');
                            }
                    }
                }
            );

        console.log(name);
       
        
      }

  };
  

   
