module.exports = 
{



    //home
    home:   function(req, res, next) 
            {
                res.render('index', { title: 'Crowd-Funding' });
            },

    //random log
    log:    function ()
            {
                console.log("Hello World");
            },

    //login
    login:      function (req, res, next)
                {

                    res.render('login');

                }




}