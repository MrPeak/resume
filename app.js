/**
 * Module dependencies.
 */

var express  = require('express'); 
var partials = require('express-partials');
var pjax     = require('express-pjax');

// todo: use `foreach` to pretify modules
var routes   = require('./routes');
var contact  = require('./routes/contact');
var exp      = require('./routes/experience');
var fol      = require('./routes/follow');

var http     = require('http');
var path     = require('path');

var app      = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(partials());
app.use(pjax());
app.use(express.favicon(__dirname + '/public/img/favicon.ico'));
app.use(express.compress());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/contact', contact.index);
app.get('/experience', exp.index);
app.get('/follow', fol.index);

app.post('/mail', contact.mail)

http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
