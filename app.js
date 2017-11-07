const routes = require('./routes');
const twitterBank = require('./twitterBank');
const express = require("express");
const app = express();
const volleyball = require("volleyball");
const nunjucks = require("nunjucks");
const locals = {
  title: 'An Example',
  people: [
  {name: 'Gandalf'}, {name: 'Frodo'}, {name: 'Hermione'}
  ]
};

app.use('/', routes);
app.use(volleyball);
app.use(express.static('public'));
app.listen(3000, function() {
  console.log('Listening on 3000.');
});


  app.set('view engine', 'html'); // have res.render work with html files
  app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
  nunjucks.configure('views', {noCache: true}); // point nunjucks to the proper directory for templates
  const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];

  app.get('/:uri', (req, res) => {
    res.render( 'index', {title: 'Hall of Fame', people: people} );

  });
