const { Router } = require('express')

const DishesController = require('../controllers/DishesController.js')

const dishesRoutes = Router()

const dishesController = new DishesController()

dishesRoutes.post('/', dishesController.create)
dishesRoutes.get('/', dishesController.index)
dishesRoutes.get('/:id', dishesController.show)
dishesRoutes.delete('/:id', dishesController.delete)


module.exports = dishesRoutes