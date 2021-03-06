var express = require('express');
var router = express.Router();
var User = require('../models/users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/addUser', function(req, res, next) {
	// Extract the request body which contains the comments
	user = new User(req.body);
  user.save(function (err, savedUser) {
    if (err)
      throw err;
    res.json({
      "displayName": savedUser._displayName,
    	"givenName": savedUser._givenName,
   		"mail": savedUser._mail,
			"studentId": savedUser._onPremisesSamAccountName,
			"surname": savedUser._surname
    });
  });
});

router.get('/findUser/:studentId', function(req, res, next) {

  User.findOne({'studentId': req.params.studentId}, function(err, user) {
    if (err) throw err;
    if (user) res.json({"status": true});
    else res.json({"status": false});
  })

});

module.exports = router;
