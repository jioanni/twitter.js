const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../twitterBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  console.log(tweets);
  res.render( 'index', { tweets: tweets } );
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  
  var list = tweetBank.find( {name: name} );
  
  res.render( 'index', {tweets: list} );
});

router.get('/tweets/:id', function(req, res) {
  var findId = req.params.id;
  var tweet = tweetBank.find({id: +findId});


  res.render('index', {tweets: tweet});
})

module.exports = router;
