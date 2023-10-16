const knex = require('../database/knex')

class IngredientsController {
  async index(req, res) {
    const dishes_id = req.params

    const ingredients = await knex('ingredient').where({dishes_id}).groupBy('name')


    return res.json(ingredients)
  }
}

module.exports = IngredientsController