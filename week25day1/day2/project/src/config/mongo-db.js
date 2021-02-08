const mongoose = require('mongoose');

const MONGOURL = 'mongodb://localhost:27017/vaibhav';

const InitMongo = async( ) =>{
    try {
        mongoose.connect(MONGOURL,{useNewUrlParser:true});
        console.log('connected to mongodb!!')
    } catch (e) {
        console.log(e)
        throw(e)
    
        
    }
}
    
module.exports = InitMongo;