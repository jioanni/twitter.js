const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../twitterBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, showForm: true } );
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  console.log(name)
  var list = tweetBank.find( {name: name} );
  console.log(list)
  res.render( 'index', {tweets: list, showForm: true, name} );
});

router.get('/tweets/:id', function(req, res) {
  var findId = req.params.id;
  var tweet = tweetBank.find({id: +findId});


  res.render('index', {tweets: tweet});
});

router.post('/tweets', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});

module.exports = router;
