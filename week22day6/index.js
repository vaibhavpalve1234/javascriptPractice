var express = require('express');
const app = express();
const abc = {
    "/":function(req,res){
        res.send("home")
        console.log(req.url)
    },
    "/home":function(req,res){
        console.log(req.url)
        console.log("home")
    },
    "/car":function(req,res){
        console.log(req.url)
        console.log("home")
    },
    "/about":function(req,res){
        console.log(req.url)
        console.log("home")
    }
}
app.get(abc);


app.listen(5000,()=>{console.log("hello")});