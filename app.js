let express = require('express');
let morgan = require('morgan');
let nunjucks = require('nunjucks');
let routes = require('./routes')

let app = express();
let port = 3000;

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true, autoescape: true});

app.use(morgan('dev'));

app.use('/', routes);

app.listen(port, function() { console.log('Were Listening!')});





// let people = [
//   {name: 'Gandalf'},
//   {name: 'Frodo'},
//   {name: 'Hermione'}
// ]
// let people2 = ['raj', 'willy', 'nick', 'beowulf'];

// app.use('/special', function(req, res, next) {
//   console.log('you made it to the special area');
// })

// app.get('/', function(req, res, next) {
//    res.render('index', {title: 'An example', people: people});
// });

// app.get('/news', function(req, res, next) {

//   res.send('No news today');
// })