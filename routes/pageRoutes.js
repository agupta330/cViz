var auth = require('./auth.js');

module.exports = function(app, passport) 
{

    // route to keynotes
    app.get('/keynotes', auth.isLoggedIn, function(req, res) {
        res.locals.pageTitle = "Keynotes";
        res.render('misc/keynotes.ejs', {});
    });

    // route to clients
    app.get('/clients', auth.isLoggedIn, function(req, res) {
        res.locals.pageTitle = "Clients";
        res.render('misc/clients.ejs', {});
    });

    // route to scheduler
    app.get('/scheduler', auth.isLoggedIn, function(req, res) {
        res.locals.pageTitle = "Scheduler";
        res.render('misc/scheduler.ejs', {});
    });

    // route to profile
    app.get('/profile', auth.isLoggedIn, function(req, res) {
        res.locals.pageTitle = "profile";
        res.render('profile.ejs', {});
    });

    // route to feedback
    app.get('/feedback', auth.isLoggedIn, function(req, res) {
        res.locals.pageTitle = "profile";
        res.render('misc/feedback.ejs', {});
    });
}