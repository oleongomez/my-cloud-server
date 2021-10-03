var express = require('express');
var router = express.Router();
var simple = require('../src/simple')
/* GET users listing. */
router.get('/', function(req, res, next) {
  var result= search(req.body.id)
  console.log(JSON.stringify(result))
  res.send(`data found ${JSON.stringify(result)}`);
});

module.exports = router;
