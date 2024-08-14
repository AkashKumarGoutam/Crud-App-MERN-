const router = require('express').Router();
const UserModel = require('../models/UserModel');

// Route to create a user
router.post('/createUser', (req, res) => {
    UserModel.create(req.body)
        .then(result => res.json(result))
        .catch(err => res.json(err));
});

// Route to get all users
router.get('/', (req, res) => {
    UserModel.find({})
        .then(result => res.json(result))
        .catch(err => res.json(err));
});


//Route to get user from id
router.get('/getUser/:id' , (req , res)=>{
    const id = req.params.id;
    UserModel.findById({_id:id})
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
})


//Route to update User detail by geting id of user
router.put('/userUpdate/:id' , (req , res)=>{
    const id = req.params.id;
    UserModel.findByIdAndUpdate({_id:id} , {name : req.body.name , email:req.body.email , age:req.body.age})
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
})



//Route to delete user by geting id
router.delete('/deleteUser/:id' , (req , res)=>{
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id:id})
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
})

module.exports = router;
