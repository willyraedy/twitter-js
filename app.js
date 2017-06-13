let express = require('express');
let morgan = require('morgan');
let nunjucks = require('nunjucks');

let app = express();
let port = 3000;

nunjucks.configure('views', {autoescape: true});

app.engine('html', nunjucks.render);

let people = [
  {name: 'Gandalf'},
  {name: 'Frodo'},
  {name: 'Hermione'}
]



app.use(morgan('dev'));

app.use('/special', function(req, res, next) {
  console.log('you made it to the special area');
})

app.get('/', function(req, res, next) {
   res.render('index.html', {title: 'An example', people: people });
});

app.get('/news', function(req, res, next) {

  res.send('No news today');
})







app.listen(port, function() { console.log('Were Listening!')});
