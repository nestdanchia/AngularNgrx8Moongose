const jwt = require('jsonwebtoken')
const Customer = require('../models/Customer')

const auth = async(req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '')
  const data = jwt.verify(token, 'WinterIsComingGOT2019')
  try {
      const customer= await Customer.findOne({ _id: data._id, 'tokens.token': token })
      if (!customer) {
          throw new Error()
      }
      req.customer= customer
      req.token = token
      next()
  } catch (error) {
      res.status(401).send({ error: 'Not authorized to access this resource' })
  }

}
function usarSeguridad(app, ruta) {
  app.use(ruta, (req, res, next) => {
    // la validación de la sesión es en memoria
    // jwt descifra y valida un token
    let token = req.get('token')
    let sesion = jwt.verify(token,'WinterIsComingGOT2019')
    if (sesion) {
        req.customer = sesion.email
        next()
    } else {
        res.status(401).send('Credencial inválida')
    }
})
}
module.exports = auth
