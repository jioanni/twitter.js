const express = require("express");
const app = express();

app.listen(2000, function() {
    console.log("listening on 2000");
});

app.get("/:operator/:firstNum/:secNum", (req, res) => {
    // res.send(console.log(req.params.operator, req.params.firstNum, req.params.secNum))
    var op = req.params.operator;
    var num1 = parseInt(req.params.firstNum);
    var num2 = parseInt(req.params.secNum);
    var sum = (num1+num2)
    res.send(sum + "");
    })