var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//var Customer=require('./models/customer')

mongoose.connect('mongodb://localhost:27017/pruebaDB', function (err) {
 
   if (err) throw err;
 
   console.log('Successfully connected');
/*
   Customer.find({}, function(err, customers) {
    if (err) throw err;
  
    // object of all the users
    console.log(customers);
  });
  */
/*
 var CustomerSiete = new Customer({
    id: '7',
    name: 'Siete',
    done: false
})
 CustomerSiete.save()
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
      
});