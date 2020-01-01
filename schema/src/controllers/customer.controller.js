//var mongoose = require('mongoose');
const Customer = require('../models/customer');
const jwt = require('jsonwebtoken');
// https://medium.com/swlh/jwt-authentication-authorization-in-nodejs-express-mongodb-rest-apis-2019-ad14ec818122
exports.auth = async(req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '')
  console.log('!!!!!!!token',token)
  const data = jwt.verify(token, 'WinterIsComingGOT2019')
  try {
    // vemos si exite el email
      const customer= await Customer.findOne({ _id: data._id, 'tokens.token': token })
      if (!customer) {
          throw new Error()
      }
      console.log('Customer',customer)
      req.customer= customer
      req.token = token
      next()
  } catch (error) {
      res.status(401).send({ error: 'Not authorized to access this resource' })
  }

}

exports.remove = async (req, res) => {
  try {
    await Customer.findOne({ _id: req.params.id }).exec((err, customer) => {
      if (err) {
        res.status(500).send(err);
      }

      customer.remove(() => {
        res.status(200).end();
      });
    });
  }
  catch (err) {
    console.log(err);
  }
}
// Queries are thenables, but queries are not promises
//const q = Customer.find();
//q instanceof Promise; // false
//q.exec() instanceof Promise; // true
exports.getCustomers = async (req, res) => {
  //  var result=
  // .find() finds all instances in the database that match the query you pass in.
  // It returns an array,
  //even if there is only one item in the array.
  // let query = res.locals.query || {};
  try {
    const result = await Customer.find({}).exec();
    //console.log('Customers:',result);
    res.send(result);
  } catch (error) {
    response.status(500).send(error);
  }

}

exports.login=async(req, res, next) => {
  try{
    const  email  = req.body.email;
    const password=req.body.password;

  //checking to make sure the user entered the correct username/password combo
  const customer = await Customer.findByCredentials(email, password)
  if (!customer) {
      return res.status(401).send({error: 'Login failed! Check authentication credentials'})
  }

else {
  //res.json({status: "success", message: "User added successfully!!!", data: null});
        const token = await customer.generateAuthToken()
        console.log('!!!!login token',token);
        res.send( {token} );
}
      //if user log in success, generate a JWT token for the user with a secret key
     /* jwt.sign({email,password}, 'privatekey', { expiresIn: '1h' },(err, token) => {
          if(err) { console.log(err) }
          //res.send(token);
          res.json({
            message: 'Successful log in',
            token
        });
      });
      */
      next();
  }
  catch (error) {
    res.status(500).send(error);
  }
}
/*
    exports.getCustomers = function (req, res) {
        //  var result=
        // .find() finds all instances in the database that match the query you pass in.
        // It returns an array,
        //even if there is only one item in the array.
        // let query = res.locals.query || {};
        Customer.find({}, (err, customers) => {
            // http://restlet.com/company/blog/2015/12/15/understanding-and-using-cors/

            if (err) {
                //res.status(500).send(err);
                console.log(err.message);
            }
            else {
                // object of all the users
                console.log(customers);
                res.send(customers)
            }
        }
        )
    }

*/

exports.customer_create = async (req, res) => {
  const customer = new Customer(
    {
      id: req.body.id,
      name: req.body.name,
      done: req.body.done,
      email:req.body.email,
      password:req.body.password

    }
  );
  try {
    await customer.save();
 // todo customer creado dispone de un token inicial
 // crado con su _id
 console.log('!!!!!!',customer);
    const token = await customer.generateAuthToken();
    /*res.json({
      message: 'Successful generate token inicial debera logearse',
      token
  });*/
    res.status(201).send({ customer, token })
    //.send(customer)
  } catch (error) {
    res.status(500).send(error);
  }


};

exports.test = function (req, res) {
  res.send('Greetings from the Test controller!');
}
exports.findAll = (req, res) => {
  Customer.find()
    .then(customers => {
      res.send(customers);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Something wrong while retrieving customers."
      });
    });
};
    /*
if(mongoose.Types.ObjectId.isValid(id)) {
User.findByIdAndUpdate(id,{$set:{name:user.name}},{new:true})       .then((docs)=>{
if(docs) {
 resolve({success:true,data:docs});
} else {
 reject({success:false,data:"no such user exist"});
}
}).catch((err)=>{
reject(err);
})
} else {
reject({success:"false",data:"provide correct key"});
}


User.update({_id:id},{$set:{name:user.name,state:user.state}},{multi:true,new:true})
.then((docs)=>{
if(docs) {
  resolve({success:true,data:docs});
} else {
  reject({success:false,data:"no such user exist"});
}
}).catch((err)=>{
reject(err);
})

if(mongoose.Types.ObjectId.isValid(id)) {
User.remove({_id: id})
.then((docs)=>{
  if(docs) {
    resolve({"success":true,data:docs});
  } else {
    reject({"success":false,data:"no such user exist"});
  }
}).catch((err)=>{
 reject(err);
})
}else {
reject({"success":false,data:"please provide correct Id"});
}

app.get('/foods', async (req, res) => {
const foods = await foodModel.find({});

try {
res.send(foods);
} catch (err) {
res.status(500).send(err);
}
});
*/
