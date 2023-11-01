const { Router } = require('express')

const DishesController = require('../controllers/DishesController.js')
const verifyUserAuthorization = require('../middlewares/verifyUserAuthorization')
const ensureAuthenticated = require('../middlewares/ensureAuthenticated.js')

const dishesRoutes = Router()

const dishesController = new DishesController()


dishesRoutes.use(ensureAuthenticated)

dishesRoutes.post('/', verifyUserAuthorization("admin"),  dishesController.create)
dishesRoutes.get('/', dishesController.index)
dishesRoutes.get('/:id', verifyUserAuthorization("admin"), dishesController.show)
dishesRoutes.delete('/:id', verifyUserAuthorization("admin"), dishesController.delete)


module.exports = dishesRoutes