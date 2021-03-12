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


     addRecipe (req, res, next){
        return res
            .status(201)  //new resource http
            .json({ key: 'value post' })
     }

    editRecipeById (req, res, next){
        return res
            .status(200)
            .json( { key: `put ${req.params.id}` })  //information about put
    }
}


module.exports = new RecipesController;
