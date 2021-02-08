const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const d = require('bcryptjs');


const User = require('../schemas/User');

/** 
*@method - post
*@param - /signup
*@description - user signup
*/

router.post("/signup", 
    [
        check('firstName','please enter a first name').not().isEmpty(),
        check('email',"valid email").isEmail(),
        check('password','please enter a password').isLength({min:8})] ,
        async (req,res)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({
                data:{},
                errors: errors.array(),
                message:'unable tp login'
            })}
        try {
        let user =  await User.findOne({email:req.body.email});
        if(user){
            return res.status(400).json({
                data:{},
                errors: [{
                    value:req.body.email,
                    msg:'user already exists.',
                    param:'email',
                    location:'body'
                }],
                message:'unable to login'
            })}
            user = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName || "",
                email:req.body.email
            });
            const salt = await bycrpt.genSalt(10);
            user.password = await bycrpt.hash(req.body.password,salt)  
        } catch (e) {
        console.log(e.message);
        res.status(500).send('error in saving');        
        }

});
module.export = router;