const express = require('express');
const app = express();
function m1(req,res,next){
    console.log("hello1")
    next()
}
function m2(req,res,next){
    console.log("hello2")
    next()
}
function m3(req,res,next){
    console.log("hello3")
    next()
}
function m4(req,res,next){
    console.log("hello4")
    next()
}
app.get("/hello",m1,m2,m4,m3,(req,res)=>{
    
    res.send('hello')
    
})
app.listen(3000,()=>{
    console.log("server sart on http://localhost:3000")
})
// base 64 encoding 