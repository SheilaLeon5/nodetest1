class RecipesController{
     recipes (req, res, next){
         return res
            .status(200)
            .json({ key: 'value' })
     }

     recipeById (req, res, next){
         return res 
            .status(200)
            .json({ id: req.params.id })
     }
}


module.exports = new RecipesController;
