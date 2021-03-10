var express = require('express');
var router = express.Router();

/* GET home page. */
//get('/ruta', ..)

router.get('/', function(req, res) {
  res.render('index', { title: 'Hello, World!' });
});


module.exports = router;
