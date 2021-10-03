var express = require('express');
var router = express.Router();
var simple = require('../src/simple')
/* GET users listing. */
router.delete('/', function(req, res, next) {
  console.log(req.body)
  let result = simple.erase(req.body.id)
  res.send(`posted: ${result.body}`);
});

module.exports = router;
