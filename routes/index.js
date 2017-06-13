const express = require('express');
const path = require('path');

const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

let options = {
    root: path.resolve(__dirname, '..', 'public')
};
console.log(options);

router.use(express.static('public'));

// router.get('/stylesheets/style.css', function(req, res, next){
//     res.sendFile('/stylesheets/style.css', options);
// });

module.exports = router;
