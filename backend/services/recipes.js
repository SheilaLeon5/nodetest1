const db = require('./db');
const helper = require('../helper');
const config = require('../config');


async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT * FROM recetas LIMIT ?,?`, 
    [offset, config.listPerPage]
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}



async function create(recipe){
  const result = await db.query(
    `INSERT INTO recetas 
    (title, ingredients, description, difficulty, person, time, typeFood) 
    VALUES 
    ( ?, ?, ?, ?, ?, ?, ?)`, 
    [
      
      recipe.title,
      recipe.ingredients,
      recipe.description,
      recipe.difficulty,
      recipe.person,
      recipe.time,
      recipe.typeFood,
    ]
  );

  let message = 'Error in creating recipes';

  if (result.affectedRows) {
    message = 'Recipes created successfully';
  }

  return {message};
}


async function update(recipeID, recipe){
  const result = await db.query(
    `UPDATE recetas 
    SET recipeID=?, title=?, ingredients=?, 
    description=?, difficulty=?,
    person=?, time=?  , typeFood=?
    WHERE recipeID=?`, 
    [
      recipe.recipeID, 
      recipe.title,
      recipe.ingredients,
      recipe.description,
      recipe.difficulty,
      recipe.person,
      recipe.time,
      recipe.typeFood,
      recipe.recipeID, 
    ]
  );

  let message = 'Error in updating programming language';

  if (result.affectedRows) {
    message = 'Programming language updated successfully';
  }

  return {message};
}


async function remove(recipeID){
  const result = await db.query(
    `DELETE FROM recetas WHERE recipeID=?`, 
    [recipeID]
  );

  let message = 'Error in deleting recipe language';

  if (result.affectedRows) {
    message = 'Recipe deleted successfully';
  }

  return {message};
}




module.exports = {
  getMultiple,
  create,
  update,
  remove
}