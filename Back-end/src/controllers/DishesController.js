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

    let dishe

    if (ingredients) {
      const filterIgredients = ingredients.split(',').map(ingredient => ingredient.trim())

      dishe = await knex('ingredients')
      .select([
        "dishes.id",
        "dishes.title",
      ])
      .whereLike("dishes.title", `%${title}%`)
      .whereIn('ingredient', filterIgredients )
      .innerJoin("dishes", "dishes.id", "ingredients.dishes_id")
      .orderBy("dishes.title")

    } else {
      dishe = await knex("dishes")
      .whereLike('title', `%${title}%`)
      .orderBy('title')
    }

    const IngredientsForDishes = await knex('ingredients')


    const dishesWithIngredients =  dishe.map(dishes => {
      const disheIngredient = IngredientsForDishes.filter(tag => tag.dishes_id === dishes.id)
      console.log(disheIngredient)

      return {
        ...dishes,
        ingredient: disheIngredient
      }
    })


    return res.json(dishesWithIngredients)
  }
}

module.exports = DishesController