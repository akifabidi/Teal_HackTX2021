var express = require('express');
var matcher = require('../service/matcher')
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/buy', (req, res) => {
  result = matcher.addBuyOrder(req.body.walletId, req.body.creatorId, req.body.quantity, req.body.price);
  //Add message giving status update !! 
  res.json(result);
});

router.post('/sell', (req, res) => {
  out = matcher.addSellOrder(req.body.walletId, req.body.creatorId, req.body.quantity, req.body.price);
  res.json(out);
});


module.exports = router;
