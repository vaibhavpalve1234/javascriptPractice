const mongoose = require('mongoose');
const todoSchema = mongoose.Schema({
    title:String,
    status:{
    type:Boolean,
    defalut:false}

})

const UserSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email:String,
    password:String,
    todo : [ todoSchema],
    createdAt:{
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('user', UserSchema)
