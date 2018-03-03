var path = require('path');
var router = require('express').Router();
var userRouter = require("./user");
var venueRouter = require("./venue");
// Web App
router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../../client/index.html'));
});
	
router.get('/signUp', function (req, res) {
  res.sendFile(path.join(__dirname, '../../client/index.html'));
});

router.get('/signIn', function(req, res) {
  res.sendFile(path.join(__dirname, '../../client(index.html'));
})
	
// API
router.use("/api/users", userRouter);
router.use("/api/venues", venueRouter);

module.exports = router;
