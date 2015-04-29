var express    			= require('express');
var app 		 	 			= express();
var connect    			= require('connect');
var logger     			= require('morgan');
var bodyParser 			= require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended: false});
var jade 		 	 			= require('jade');
var Firebase 	 			= require('firebase');
var routes 					= require('./routes/router.js')
var root     				= __dirname + '/public';
/*
 View Engine
 */
app.use(express.static(root));
app.set('views', root + '/views');
app.set('view engine', 'jade');
app.use(logger('dev'));

/*
 Routes
 */
app.use('/', routes);
app.use('/login', routes);
app.use('/register', routes);
app.use('/profile', routes);
app.use('/gen', routes);
app.use('/browse', routes);
app.use('/upload', routes);

/**
 * Log server
 */
app.listen(3000, function(){
    console.log("Server is running on port: Tré-th000usand");
})