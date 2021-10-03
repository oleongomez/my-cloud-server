var express = require('express');
var router = express.Router();
var simple = require('../src/simple')
/* GET users listing. */
router.put('/', function(req, res, next) {
  console.log(req.body)
  let result = simple.modify(req.body)
  res.send(`posted: ${result.body}`);
});

module.exports = router;
