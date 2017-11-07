const express = require("express");
const app = express();
const volleyball = require("volleyball");
const nunjucks = require("nunjucks");
const locals = {
  title: 'An Example',
  people: [
  {name: 'Gandalf'}, {name: 'Frodo'}, {name: 'Hermione'}
  ]
}

nunjucks.configure('./views');
nunjucks.render('index.html', locals, function(err, output) {
  if (err) throw err;
  console.log(output);
});

app.use(volleyball);

app.listen(3000, function() {
  console.log("Listening on 3000.")
})

// app.get('/:uri', (req, res) => {
//     res.send(console.log(req.method + " / " +req.params.uri));

// })
