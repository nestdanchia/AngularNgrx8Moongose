/*
exports.find=(async ()=>{
    try {
        const customer=await Customer.find({name:'Leon'})
    customer.set({name:'Xeon'});
    await customer.save();
    } catch (error) {
        console.log(error);
    }
    

}

)()

*/
//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

 /*function (err) {
        if (err) {
            console.log(err)
        }
        res.send('customer Created successfully')
    })
   
exports.remove = (req, res) => {
    var objId = req.params.id;
    console.log(objId);
    var id = `${objId}`;
    console.log('el _ides', id);

 Customer.remove({ "_id": Customer.ObjectId(req.params.id) },
        function (err, docs) {
            //db.users.remove({"_id": ObjectId("4d512b45cc9374271b02ec4f")});
            if (err) return err;
            console.log(docs);
            res.send(docs);

            if (!mongoose.Types.ObjectId.isValid(req.params.id))
                return res.status(404).send('Invalid ID.');

            Customer.deleteOne(
                {
                    _id: id,
                }, (e) => {
                    if (e)
                        res.status(500).send(e);
                    else
                        res.sendStatus(200);
                });
        })}; */