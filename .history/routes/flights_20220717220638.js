var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights');

// GET /flights/new
router.get('/new', flightsCtrl.new);
router.post('/', flgihtsCtrl.create);
// router.get('/', flightsCtrl.index);

module.exports = router;
