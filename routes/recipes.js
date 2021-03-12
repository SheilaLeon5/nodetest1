var express = require('express');
var recipesController = require('../controllers/recipesController');

var router = express.Router();

router.route('/')
.get(recipesController.recipes)
.post(recipesController.addRecipe)
  

router.route('/:id')
.get(recipesController.recipeById)
.put(recipesController.editRecipeById)



/*
router.get('/', function(req, res) {
    res.json({ username: 'Flavio' });
});
*/

module.exports = router;
