let express = require('express');
let app = express();
let port = 3000;

app.get('/', function(req, res, next) {
  res.send('Hi!');
});







app.listen(port, function() { console.log('Were Listening!')});
