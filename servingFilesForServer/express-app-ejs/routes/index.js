var express = require('express');
var router = express.Router();
var multer = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
var upload = multer({ storage });
var userData = [];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express', userData });
});

/* GET home page. */
router.get('/login', function (req, res, next) {
  const data = req.query;
  console.log(data)
  res.render('loginForm');
});

/* GET home page. */
router.post('/login', function (req, res, next) {
  const data = req.body;
  userData = [...userData, data]
  console.log(data)
  res.render('loginForm');
});


router.get('/upload', function (req, res, next) {
  res.render('imageUpload')
})

router.post('/upload', upload.array('image', 4), function (req, res, next) {
  console.log(req.files);
  res.json({ message: 'success', text: `${req.files.length} File(s) saved Successfully` })
})

module.exports = router;
