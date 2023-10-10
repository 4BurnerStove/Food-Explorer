const knex = require('../database/knex')

class DishesController{
  async create(req, res){
    const { title, description, price, imageFood, ingredients } = req.body 

    const [ dishes_id ] = await knex("dishes").insert({
      title,
      description,
      price,
      imageFood
    })

    const ingredientInsert = ingredients.map(ingredient => {
      return { 
        dishes_id,
        ingredient
      }
    })

    await knex("ingredients").insert(ingredientInsert)

    res.json()
  }
}

module.exports = DishesController