const express = require('express');
const path = require('path');
const app = express()
const bodyParser = require("body-parser");
const { userInfo } = require('os');
const port = 8000;
let use = [];
let count = {};
// const staticsPath = path.join(__dirname,'../public');
// const templatePath = path.join(__dirname,"../templates")
app.set('view engine', 'hbs');
// app.set('views',templatePath);
app.use(bodyParser.json());

// app.use(express.static(staticsPath));
app.get("/",(req,res)=>{

    res.render('index',{ 
        name : "vaibhav"
    })
})
app.post("/home",(req,res)=>{
    console.log(req.body);
    use.push(req.body)
    
    res.json({
        massage:"welcome to your home"
    })
})
app.get("/data",(req,res)=>{

    res.json(use);
})
app.get("/count",(req,res)=>{
    res.json()
})
app.listen(port,()=>{
    console.log(`server live on http://localhost:${port}`)
})