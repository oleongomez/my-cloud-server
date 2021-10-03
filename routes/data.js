var express = require('express');
var router = express.Router();
var simple = require('../src/simple')
/* GET users listing. */
router.get('/', function(req, res, next) {
  var result= simple.read_all()
  console.log(JSON.stringify(result))
  res.send(result);
});

module.exports = router;
