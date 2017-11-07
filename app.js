const express = require("express");
const app = express();
const volleyball = require("volleyball");

app.use(volleyball);

app.listen(3000, function() {
  console.log("Listening on 3000.")  
})

// app.get('/:uri', (req, res) => {
//     res.send(console.log(req.method + " / " +req.params.uri));
    
// })