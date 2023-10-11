const { Router } = require('express')


const usersRouter = require('./users.routes')
const dishesRoutes = require('./dishes.routes')
const favoritesRoutes = require('./favorites.routes')

const routes = Router()

routes.use('/users', usersRouter)
routes.use('/dishes', dishesRoutes)
routes.use('/favorites', favoritesRoutes)

module.exports = routes;