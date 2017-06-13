const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
router.use(bodyParser.json());

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, showForm: true } );
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  console.log('Nameeeeeeeeeeeee', name);
  var list = tweetBank.find( {name: name} );
  res.render( 'index', { tweets: list, showForm: true, name: name});
});

router.post('/tweets', function(req, res){
  let add = tweetBank.add(req.body.name, req.body.text);
  console.log(req.body.name, req.body.text);
  res.redirect('/');
  //console.log(tweetBank.find())
});

// let options = {
//     root: path.resolve(__dirname, '..', 'public')
// };

router.use(express.static('public'));

// router.get('/stylesheets/style.css', function(req, res, next){
//     res.sendFile('/stylesheets/style.css', options);
// });

module.exports = router;
