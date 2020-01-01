//const mongodb = require('./../mongodb')
const jwt = require('./jwt')
const colName = 'usuarios'
/**
 * Módulo con funciones útiles para la seguridad de la aplicación
 */
module.exports = {
    /** determina si una ruta debe usar seguirdad o no */
    usarSeguridad: usarSeguridad,

    /** comprueba si exite un usuario */
   // existeUsuario: existeUsuario,
    /** crea un nuevo usuario */
    //crearUsuario: creandoUsuario,
    /** determina si unas credenciales son válidas */
    //: esUsuarioValido,
    /** crea un nuevo token de sesión */
    //nuevaSesion: (usuario) => jwt.generaToken(usuario)
}

function usarSeguridad(app, ruta) {
  // valida la ruta privada si exite el token lo agrega a la peticion
    app.use(ruta, (req, res, next) => {
        // la validación de la sesión es en memoria
        // jwt descifra y valida un token
        // La cabecera de petición Authorization contiene las credenciales para
        //autenticar a un usuario en un servidor
        // Authorization: <type> <credentials>
        // Bearer authentication (also called token authentication)
        // 'Authorization': 'Bearer xxxxxxxxxxxxxxxxx'
        const token = req.headers['Authorization'];
          // token = token.replace('Bearer ', '')
        if(typeof token !== 'undefined') {
          token = token.replace('Bearer ', '')
           // const bearer = header.split(' ');
            //const token = bearer[1];
            token=jwt.verify(token)
            if(token){
            req.token = token;
            next()
            }
            else {
              res.status(401).send('Credencial  Invalida debera logearse')
          }

        } else {
            //If header is undefined return Forbidden (403)
            res.sendStatus(403)
        }

        /*let sessionId = req.get('sessionId')
        let sesion = jwt.verify(sessionId)
        if (sesion) {
            req.usuario = sesion.email
            next()
        } else {
            res.status(401).send('Credencial inválida')
        }*/
    })
}

/**
 * los registros de usuario se crean físicamente en base de datos
 */
/*
function existeUsuario(usuario) {
    return mongodb.finding(colName, { email: usuario.email })
}

function creandoUsuario(usuario) {
    return mongodb.inserting(colName, usuario)
}

function esUsuarioValido(usuario) {
    return mongodb.finding(colName, { email: usuario.email, password: usuario.password })
}


*/

