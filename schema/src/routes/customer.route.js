const express = require('express');
const router = express.Router();
//const customerRoute=express.Router;
//const Customer = require('../models/customer');

const customerControler = require('../controllers/customer.controller');
router.post('/register',customerControler.register);
router.post('/login',customerControler.login);
// a simple test url to check that all of our files are communicating correctly.
router.get('/test', customerControler.test);
//router.get('find',customerControler.find);
router.post('/add', customerControler.customer_create);
router.get('/customer',customerControler.getCustomers);
//getCustomers
 //router.get('/find',customerControler.findCustomers) ;
 //router.get('/:_id', readOne);
 //router.put('/:_id', update);
 router.delete('/delete/:id',customerControler.remove);
 /*
 customerRoute.route('/delete/:id').delete((req, res, next) => {
    Customer.findOneAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data
        })
      }
    })
  })
  */
module.exports = router;
