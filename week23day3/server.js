// Make your portfolio page with the help of express and handlebars.
// You can use the template which we made while doing HTML

const express = require("express");

const app = express();

const path = require('path');

const bodyParser = require('body-parser');

app.set('views',path.join(__dirname,'views'));

app.use(bodyParser.json());

app.get("/portpolio",(req,res)=>{
    res.render("index",{
        tital:"portpolio",
        name:"vaibhav",
        last_name:"palve"
    })
})













app.listen(3000,(req,res)=>{
    console.log("server is start on http://localhost:3000");
})