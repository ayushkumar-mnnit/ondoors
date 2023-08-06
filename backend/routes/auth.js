

const express=require('express') 
const router=express.Router()
const User=require('../models/User')
const {body,validationResult}=require('express-validator')

// create a user using POST "/api/auth/createuser" 


router.post('/createuser',[

    body('name','Enter a valid name of minimum 3 characters').isLength({ min: 3 }),
    body('email','Enter a valid email').isEmail(),
    body('password','Enter a password of minimum length of 5').isLength({ min: 5 }),


],async (req,res)=>{
//    send bad request in case of errors:
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // check if user with a particular email already exists or not
try{
    let user=await User.findOne({email:req.body.email})

    if(user)
    {
        return res.status(400).json({error:"User with this email already exists"})
    }


    user=await User.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    })

    res.json(user)

}catch(error){
    console.log(error.message)
    res.status(500).send("some error occured")

}
})
 
module.exports=router