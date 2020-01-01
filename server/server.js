 
    const express = require('express');
    const bodyParser = require('body-parser');
    const cors = require("cors");
// ruta / raiz del sitio
    const app = express();
    const port = process.env.PORT || 3000;
    const customers = require('./customers');
    //app.use(cors());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    
    app.use((req, res, next) => {
      console.log(`recibida petición: ${req.url}`);
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
      res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
      res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
      next();
  });
  
    /*app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
      );
      next();
    });
    */
    app.get('/customers', (req, res) => {
      res.json(customers);
    });
    
   app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    })