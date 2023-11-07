var express = require('express');
var router = express.Router();
var userData =[];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', userData });
});

/* GET home page. */
router.get('/login', function(req, res, next) {
  const data = req.query;
  console.log(data)
  res.render('loginForm');
});

/* GET home page. */
router.post('/login', function(req, res, next) {
  const data = req.body;
  userData =[...userData, data]
  console.log(data)
  res.render('loginForm');
});

module.exports = router;
