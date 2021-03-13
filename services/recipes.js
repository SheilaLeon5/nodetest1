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

async function create(recipes){
  const result = await db.query(
    `INSERT INTO recetas 
    (recipeID, title, ingredients, description, difficulty, person, time, typeFood) 
    VALUES 
    (?, ?, ?, ?, ?)`, 
    [
      recipes.recipeID, recipes.title,
      recipes.ingredients, recipes.description,
      recipes.difficulty, recipes.person,
      recipes.time, recipes.typeFood,
    ]
  );

  let message = 'Error in creating recipes';

  if (result.affectedRows) {
    message = 'Recipes created successfully';
  }

  return {message};
}



module.exports = {
  getMultiple,
  create
}