var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pen', { title: 'Search Result pen' });
});

module.exports = router;
