var express = require('express');
var router = express.Router();
var timePerMinutes = require('./timePerMinutes')
var createResults = require('./createResults');
var signIn = require('./signAuth');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.use('/time',timePerMinutes);
router.use('/results',createResults);
router.use('/auth',signIn);

module.exports = router;
