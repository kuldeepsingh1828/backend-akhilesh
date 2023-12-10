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
  userModel.find({}).then((data) => {
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


router.delete('/delete/:id', function (req, res, next) {
  let id = req.params.id;
  console.log(id);
  userModel.deleteOne({ _id: id }).then((data) => {
    console.log(data);
    res.json({ msg: 'User deleted successfully' });
  }).catch((err) => {
    console.log(err);
    res.status(400).json({ msg: 'Error is there...' });
  });
});

router.put('/update/:id', function (req, res, next) {
  let id = req.params.id;
  let user = req.body.user;
  delete user._id;
  console.log(id);
  userModel.updateOne({ _id: id }, { $set: { ...user } }).then((data) => {
    console.log(data);
    res.json({ msg: 'User updated successfully' });
  }).catch((err) => {
    console.log(err);
    res.status(400).json({ msg: 'Error is there...' });
  });
});
module.exports = router;
