var path = require('path');
var router = require('express').Router();
var userRouter = require("./user");
var interestRouter = require("./interest.js");
var config = require("../../config/database.js");

// Web App
router.get('/', function (req, res) {
  //res.sendFile(path.join(__dirname, '../../client/index.html'));
});
	
router.get('/signUp', function (req, res) {
  res.sendFile(path.join(__dirname, '../../client/index.html'));
});

router.get('/signIn', function(req, res) {
  res.sendFile(path.join(__dirname, '../../client/index.html'));
});

router.get('/places', function(req, res) {
  res.sendFile(path.join(__dirname, '../../client/index.html'));
});


router.get('/place', function(req, res) {
  res.sendFile(path.join(__dirname, '../../client/index.html'));
});

// API
router.use("/api/users", userRouter)
router.use("/api/interest", interestRouter)

module.exports = router;
;