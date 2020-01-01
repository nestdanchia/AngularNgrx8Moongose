let mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
//const bcrypt = require('bcryptjs')
// A schema defines document properties
let Schema = mongoose.Schema;
const customerSchema = new Schema({
  //_id: String,
  id: String,
  name:String,
  done:Boolean,
  email:String,
  password:String,
  tokens:[{
    token:{
      type:String,
    }
  }]
})
/*
customerSchema.pre('save', async function (next) {
  // Hash the password before saving the customer model
  const customer = this
  if (customer.isModified('password')) {
      customer.password = await bcrypt.hash(customer.password, 8)
  }
  next()
})
*/
customerSchema.statics.findByCredentials = async (email, password) => {
  // Search for a customer by email and password.
  const customer = await Customer.findOne({ email} )
  if (!customer) {
      throw new Error({ error: 'Invalid login credentials' })
  }
  /*
  const isPasswordMatch = await bcrypt.compare(password, customer.password)
  if (!isPasswordMatch) {
      throw new Error({ error: 'Invalid login credentials' })
  }*/
  return customer
}
customerSchema.methods.generateAuthToken = async function() {
  // Generate an auth token for the customer
  const customer = this
  const token = jwt.sign({_id: customer._id},'WinterIsComingGOT2019')
  customer.tokens = customer.tokens.concat({token})
  await customer.save()
  return token
}

const Customer=mongoose.model('Customer', customerSchema);
module.exports=Customer
//,{collection:'customers'} mongo crearia una coleccion customers en la BD
// yo lo pondre con el nombre que le asignamos al modelo

// nombre de la coleccion sera Customer
// creamos una instancia del documento  ==fila de la tabla== coleccion
//We need to call the model constructor on the Mongoose instance
// and pass it the name
// of the collection and a reference to the schema definition.
//export function customer(){ return mongoose.model('Customer', customerSchema)}


