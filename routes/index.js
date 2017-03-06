var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  request('http://api.openweathermap.org/data/2.5/weather?q=London,us&appid=', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body);
  }
});
res.render('index', { title: 'Weather sApp' });

});

module.exports = router;
