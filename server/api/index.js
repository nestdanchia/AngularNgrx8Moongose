const maestros = require('./maestros.js');
const usuarios = require('./usuarios.js');
module.exports = app => {
    //usuarios(app, '/api/pub/usuarios');
    //sesiones(app, '/api/pub/sesiones');
    maestros(app, '/customers');
    //movimientos(app, '/api/priv/movimientos');
}