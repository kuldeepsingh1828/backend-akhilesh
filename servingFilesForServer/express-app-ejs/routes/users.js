var express = require('express');
var router = express.Router();

const users = [
  {
    name: 'user 1',
    age: 23,
    gender: 'male'
  },
  {
    name: 'user 2',
    age: 22,
    gender: 'female'
  }
]

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json({ users });
  // res.status(400).json({ msg: 'Error is there...' });
});

router.post('/add', function (req, res, next) {
  users.push(req.body.user);
  console.log(users);
  res.json({ msg: 'User Added Successfully' });
});

module.exports = router;
