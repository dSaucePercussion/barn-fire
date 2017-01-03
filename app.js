var express = require('express');
var app = express();


// set up handlebars view engine
var handlebars = require('express-handlebars')
        .create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/static')); 
app.use(require('body-parser')());

app.get('/', function(req, res) {
//   res.locals.partials = postArray;
        res.render('home');
});

app.get('/office', function(req, res){  
        res.render('office');
});

app.get('/block', function(req, res){  
        res.render('block');
});

app.get('/addnewbuyer', function(req, res){  
        res.render('addnewbuyer');
});

app.post('/addnewbuyer', function(req, res){  
        res.render('buyeradded');
});

/*
app.use(function(req, res, next){
        res.locals.partials = postArray;
        next();
});
*/

// 404 catch-all handler (middleware)
app.use(function(req, res, next){
        res.status(404);
        res.render('404');
});

// 500 error handler (middleware)
app.use(function(err, req, res, next){
        console.error(err.stack);
        res.status(500);
        res.render('500');
});

app.listen(app.get('port'), function(){
  console.log( 'Express started on http://localhost:' +
    app.get('port') + '; press Ctrl-C to terminate.' );
});
