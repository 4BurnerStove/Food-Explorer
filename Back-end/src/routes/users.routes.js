const { Router } = require('express')

const usersRoutes = Router()

usersRoutes.post('/', (req, res) => {
  const { name, email } = req.body

  res.json({name, email})
})


module.exports = usersRoutes