const router = require('express').Router();
const moongoose = require('mongoose');
const Customer = moongoose.model('Customer');
router.get('/', async (req,res)=>{
   console.log(req)
    try {
           const allitems = await Customer.find({})
        res.send(allitems);
   
    } catch (error) {
        res.status(500)
    }
   })
router.post('/', async (req,res)=>{
     try {
            const customer= new Customer();
            customer.c_fname = req.body.c_fname,
            customer.c_lname = req.body.c_lname,
            customer.c_phone = req.body.c_phone,
            customer.c_address = req.body.c_address,
            customer.c_postalcode = req.body.c_postalcode,
            customer.c_gender = req.body.c_gender,
            customer.c_status = req.body.c_status
       await customer.save();
       res.send(customer)
     } catch (error) {
        res.status(500)
     }
})
router.get('/edit/:id', async (req,res)=>{
  
    try {
        const singleDetails = await Customer.findOne({_id:req.params.id})
      
        res.send(singleDetails);
    } catch (error) {
        res.status(500) 
    }
    //res.send("get id");
      
})

router.put('/:id', async (req,res)=>{
    try {
        const updateItem = await Customer.findByIdAndUpdate({
            _id:req.params.id
            
        },req.body,{
            new:true,
            runValidators:true
        })
        res.send(updateItem);
       
    } catch (error) {
        res.status(500) 
    }
      
})
router.delete('/:id', async (req,res)=>{
  
    try {
      const deleteItems = await Customer.findByIdAndRemove({_id:req.params.id})
            res.send(deleteItems);
            
    } catch (error) {
        res.status(500) 
    }
    
    //res.send("get id");
      
})

module.exports = router;