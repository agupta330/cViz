var auth = require('./auth.js');

module.exports = function(app, passport) {

    var activeLayout = 'layouts/mobile-angular';

    // show welcome screen
    app.get('/m/', function(req, res) {
        res.locals.pageTitle = "Welcome...";
        res.render('mobile/welcome.ejs', {
            layout: activeLayout
        });
    });

    app.get('/m/sessions', function(req, res) {
        res.locals.pageTitle = "Visit schedules";
        res.render('mobile/sessions.ejs', {
            layout: activeLayout
        });
    });

    app.get('/m/session', function(req, res) {
        res.locals.pageTitle = "Session";
        res.render('mobile/session.ejs', {
            layout: activeLayout
        });
    });

    // show csclocations screen
    app.get('/m/factsheet', function(req, res) {
        res.locals.pageTitle = "Our fact sheet";
        res.render('mobile/factsheet.ejs', {
            layout: activeLayout
        });
    });

    app.get('/m/sessiondetail', auth.isLoggedIn, function(req, res) {
        res.locals.pageTitle = "Session Details";
        res.render('mobile/sessiondetail.ejs', {
            layout: 'layouts/scheduleDetail'
        });
    });
}

