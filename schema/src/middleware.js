module.exports.useMiddleware = app => {
    const cors = require('cors');
    const bodyParser = require('body-parser')
    const seguridad = require('./seguridad/seguridad.js')

    // Permite llamadas desde otros dominios o puertos
    app.use(cors());


    // Permite recuperar como objetos JavaScript el contenido emitido por el cliente
    // tanto en parámetros
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    // como en el body
    app.use(bodyParser.json());

    // Otro uso común del middleware es la monitorización de la aplicación
    // Interceptor de llamadas
    app.use((req, res, next) =>{
        console.log(`recibida petición: ${req.url}`);
        // Es muy importante continuar el flujo hacia la siguiente función
        next();
        // En caso de no hacerlo, se colgaría la llamada
    });

    // este middleware se encargará de vigilar la entrada
    //seguridad.usarSeguridad(app, '/api/priv');
}
/*
app.use(cors());
// sin cors debemos agregar esto:
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

*/

