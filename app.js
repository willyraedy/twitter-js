let express = require('express');
let morgan = require('morgan');


let app = express();
let port = 3000;

app.use(morgan('dev'));

app.use('/special', function(req, res, next) {
  console.log('you made it to the special area');
})

app.get('/', function(req, res, next) {
  res.send('Hi!');
});

app.get('/news', function(req, res, next) {

  res.send('No news today');
})







app.listen(port, function() { console.log('Were Listening!')});
