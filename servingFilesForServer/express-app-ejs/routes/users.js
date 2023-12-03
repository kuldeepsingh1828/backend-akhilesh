var express = require('express');
var router = express.Router();
var userModel = require('../connection/userModel');

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
  userModel.find({ age: { $gt: 35 } }).then((data) => {
    console.log(data);
    res.json({ users: data });
  }).catch((err) => {
    console.log(err);
    res.status(400).json({ msg: 'Error is there...' });
  });
  // res.status(400).json({ msg: 'Error is there...' });
});

router.post('/add', function (req, res, next) {
  let newuser = req.body.user;
  users.push(newuser);
  console.log(users);

  userModel.create(newuser).then((data) => {
    console.log(data);
    res.json({ msg: 'User added successfully' });
  }).catch((err) => {
    console.log(err);
    res.status(400).json({ msg: 'Error is there...' });
  });
});

module.exports = router;
