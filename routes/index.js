const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const tweetBank = require('../tweetBank');

// could use one line instead: const router = require('express').Router();

module.exports = function(io) {

  const router = express.Router();
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
    var list = tweetBank.find( {name: name} );
    res.render( 'index', { tweets: list, showForm: true, name: name});
  });

  router.get('/tweets/:id', function (req, res) {
    const id = +req.params.id;
    const list = tweetBank.find( {id: id} );
    res.render('index', { tweets: list });
  });

  router.post('/tweets', function(req, res){
    let add = tweetBank.add(req.body.name, req.body.text);
    io.sockets.emit('newTweet', { name: req.body.name, content: req.body.text });
    // res.redirect('/');
  });

  let options = {
      root: path.resolve(__dirname, '..', 'public')
  };

  router.get('/:directory/:file', function(req, res, next){
      const folder = req.params.directory;
      const fileName = req.params.file;
      const path = `/${folder}/${fileName}`
      res.sendFile(path, options);
  });

  //router.use(express.static('public'));



 return router;
};
