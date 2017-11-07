const _ = require("lodash");

let data = [];

module.exports = { add: add, list: list, find: find };

function add (name, content) {
    data.push({ name: name, content: content });
  }
  
  function list () {
    return _.cloneDeep(data);
  }
  
  function find (properties) {
    return _.cloneDeep(_.filter(data, properties));
  }



  
