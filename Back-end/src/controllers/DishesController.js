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

  async show(req, res) {
    const { id } = req.params

    const dishe = await knex('dishes').where({ id }).first()

    return res.json(dishe)

  }

  async delete(req, res) {
    const { id } = req.params

    await knex('dishes').where({ id }).delete()

    return res.json()
  }

  async index(req, res) {
    const { title, ingredients } = req.query

    const dishe = await knex("dishes")
    .where({ title })
    .orderBy('title')

    return res.json(dishe)
  }
}

module.exports = DishesController