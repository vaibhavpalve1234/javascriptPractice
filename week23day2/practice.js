const express = require('express');
const path = require('path');
const app = express()
const port = 8000;
// const staticsPath = path.join(__dirname,'../public');
const templatePath = path.join(__dirname,"../templates")
app.set('view engine', 'hbs');
app.set('views',templatePath)

// app.use(express.static(staticsPath));
app.get("/",(req,res)=>{
    res.render('index',{ 
        name : "vaibhav"
    })
})
app.listen(port,()=>{
    console.log(`server live on http://localhost:${port}`)
})