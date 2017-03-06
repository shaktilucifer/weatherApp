var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("here");
  request('http://api.openweathermap.org/data/2.5/weather?q=London,uk', function (error, response, body) {
    console.log(response);
  if (!error && response.statusCode == 200) {
    console.log(body) // Print the google web page.
  }
});
res.render('index', { title: 'Weather sApp' });

});

module.exports = router;
