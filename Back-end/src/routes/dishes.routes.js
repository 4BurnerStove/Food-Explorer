const { Router } = require('express')

const DishesController = require('../controllers/DishesController.js')
const verifyUserAuthorization = require('../middlewares/verifyUserAuthorization')
const ensureAuthenticated = require('../middlewares/ensureAuthenticated.js')

const dishesRoutes = Router()

const dishesController = new DishesController()


dishesRoutes.use(ensureAuthenticated)
dishesRoutes.use(verifyUserAuthorization("admin"))

dishesRoutes.post('/', dishesController.create)
dishesRoutes.get('/', dishesController.index)
dishesRoutes.get('/:id', dishesController.show)
dishesRoutes.delete('/:id', dishesController.delete)


module.exports = dishesRoutes