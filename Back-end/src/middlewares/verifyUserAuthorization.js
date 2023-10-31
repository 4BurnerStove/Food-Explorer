const AppError = require('../utils/AppError')

function verifyUserAuthorization(roleToVerify){
  return (req, res, next) => {
    const { role } = req.user
    console.log(role)

    if(role !== roleToVerify){
      throw new AppError("Usuário não autorizado", 401)
    }

    return next()
  }
}

module.exports = verifyUserAuthorization