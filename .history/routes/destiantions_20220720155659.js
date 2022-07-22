var express = require('express');
var router = express.Router();
const destinationsCtrl = require('../controllers/destinations');


router.post('/destinations', destinationsCtrl.create);




module.exports = router;