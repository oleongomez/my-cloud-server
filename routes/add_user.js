var express = require('express');
var router = express.Router();
var simple = require('../src/simple')
/* GET users listing. */
router.post('/', function(req, res, next) {
  console.log(req.body)
  let result = simple.write(req.body)
  res.send(`posted: ${result.body}`);
});

module.exports =router;
