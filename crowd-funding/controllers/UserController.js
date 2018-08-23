module.exports = 
{
    home:   function(req, res, next) 
            {
                res.render('index', { title: 'Crowd-Funding' });
            },

    log: function ()
    {
        console.log("Hello World");
    }
}