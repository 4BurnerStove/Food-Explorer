const knex = require('../database/knex')

class DishesController{
  async create(req, res){
    const {title, description, price, name} = req.body 
    const { user_id } = req.params

    const dishes_id = await knex("dishes").insert({
      title,
      description,
      price,
      user_id
    })

    const ingredientInsert = ingredients.map(ingredient => {
      return { 
        dishes_id,
        name,
      }
    })

    await knex("ingredients").insert(ingredientInsert)

    res.json()
  }
}

module.exports = DishesController