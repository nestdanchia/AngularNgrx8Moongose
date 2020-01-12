const express = require('express');
const customer = require('./routes/customer.route');
const app = express();
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
(async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/pruebaDB', { useNewUrlParser: true, useUnifiedTopology: true });
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
