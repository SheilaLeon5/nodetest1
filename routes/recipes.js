var express = require('express');
const { recipeById } = require('../controllers/recipesController');
var recipesController = require('../controllers/recipesController');
var router = express.Router();

router.route('/')
.get(recipesController.recipes);
  

router.route('/:id')
.get(recipesController.recipeById);



/*
router.get('/', function(req, res) {
    res.json({ username: 'Flavio' });
});
*/

module.exports = router;
