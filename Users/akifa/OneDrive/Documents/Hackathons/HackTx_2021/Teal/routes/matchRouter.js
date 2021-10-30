var express = require('express');
var matcher = require('../service/matcher')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/buy', (req, res) => {
  
});

module.exports = router;
