const Customer=require('./models/customer');
async function work(){
    // find retorna un arreglo..findOne regresa un objeto
const customer=await Customer.findOne({name:'Federic'})
//.lean();
const customerData=customer.toObject();
return customer;
}


module.exports=work;