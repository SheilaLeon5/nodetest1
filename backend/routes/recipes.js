/*
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
});lo
*/
/*
module.exports = router;
*/


const express = require('express');
const router = express.Router();
const recipes = require('../services/recipes');

/* GET recipe. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await recipes.getMultiple(req.query.page)); //directly access the parsed query string parameters
  } catch (err) {
    console.error(`Error while getting recipe `, err.message);
    next(err);
  }
});



/* POST recipe*/
router.post('/', async function(req, res, next) {
  try {
    res.json(await recipes.create(req.body));  // this property contains key-value pairs of data submmited in the request body
  } catch (err) {
    console.error(`Error while creating recipe`, err.message);
    next(err);
  }
});


/* PUT recipe*/
router.put('/:id', async function(req, res, next) {
  try {
    res.json(await recipes.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating recipe`, err.message);
    next(err);
  }
});


/* DELETE programming language */
router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await recipes.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting recipe`, err.message);
    next(err);
  }
});

module.exports = router;