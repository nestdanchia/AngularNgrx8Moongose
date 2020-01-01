const express = require('express');
const customer = require('./routes/customer.route');
const app = express();
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
(async ()  =>{
  try {
    await mongoose.connect('mongodb://localhost:27017/pruebaDB',{ useNewUrlParser: true,useUnifiedTopology: true});
    //await work();
  } catch (error) {
    console.log(error)
  }


})()
const middleware = require('./middleware');
middleware.useMiddleware(app);
app.use('/api', customer);
let port = 3000;
app.listen(port, () => {
  console.log('Server is up and running on port numner ' + port);
});
// npm run dev
//...........
// https://medium.com/@bvodola/crud-routes-generator-with-node-express-js-mongoose-30a16538e16a
//............
//var cors = require('cors');
//const bodyParser = require('body-parser');
//var Customer = require('./models/customer')
// https://github.com/Eslamunto/ProductsApp/blob/master/routes/product.js
// https://codeburst.io/writing-a-crud-app-with-node-js-and-mongodb-e0827cbbdafb

// Imports routes for the products
//const MongoClient = require('mongodb').MongoClient;

//const work=require('./work.js');
// mongo "mongodb://nestor0-shard-00-00-l5gy4.mongodb.net:27017,nestor0-shard-00-01-l5gy4.mongodb.net:27017,nestor0-shard-00-02-l5gy4.mongodb.net:27017/test?replicaSet=Nestor0-shard-0" --ssl --authenticationDatabase admin --username nestdan --password nestor01
//set up mongoose conection

//     await mongoose.connect('mongodb://localhost:27017/pruebaDB')
//"mongodb://localhost:27017/pruebaDB"

// filtro ruta privada

/*,
function (err) {

  if (err) throw err;

  console.log('Successfully connected');
});
*/
  /*
  crea el modelo pero no lo guarda
  var CustomerSiete = new Customer({
    id: '7',
    name: 'Siete',
    done: false
})
// _id is an ObjectId SchemaType You can also access a string representation
//of it by removing the underscore. console.log('id of saved user: ' + user.id);
 await CustomerSiete.save()
    .then(doc => {
        console.log(doc)
    })
    .catch(err => {
        console.error(err)
    })

    Customer.find({
        done:false
    })
    .exec(function(err, customers) {
        if (err) throw err;

        console.log(customers);
    });
    */
/*
  Customer.find({}, function (err, customers) {
    if (err) throw err;

    // object of all the users
    console.log(customers);
  });*/



// ?? https://github.com/callicoder/node-easy-notes-app/blob/master/app/routes/note.routes.js



 // Permite recuperar como objetos JavaScript el contenido emitido por el cliente
    // tanto en parámetros   app.use(bodyParser.urlencoded({
      //  extended: true
      //})); definidos en el middleware
//app.use(bodyParser.json());
 // como en el body app.use(bodyParser.json());


//app.use(bodyParser.urlencoded({extended: false}));
/*
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
   constructor(private auth: MyAuthService) {}

   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       // Get the auth header from your auth service.
       const authToken = this.auth.getAuthToken();
       const authReq = req.clone({headers: req.headers.set('Authorization', `Token ${authToken}`)});
       return next.handle(authReq);
   }
}

*/
