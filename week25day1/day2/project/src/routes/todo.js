const auth = require("../middleware/auth")
const express = require('express')
const router = express.Router()
const User = require("../schemas/User")
const { check, validation} = require('express-validator/check');
router.post(
    '/todo',
    auth,
    check('title','please enter the title ').not().isEmpty(),
    async (req,res)=>{
        const errors = validation
    try {
        const user = await User.findById(req.user.id)
        await user.todo.push({
            title:req.budy.title
        })
        await user.save();
        res.status(200).json({
            data:{},
            errors:[],
            message:'start todo'
        })
    } catch (e) {
        console.log(e)
    }})
module.exports = router