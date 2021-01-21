const express = require("express");
// console.log(express);
const app =express();
const path = require("path");
// console.log(path);
const staticPath = path.join(__dirname,"../public");
app.use(express.static(staticPath));



app.get("/",(req,res) =>{
    res.send("hello");
    console.log(req.url);
})
// app.get("/about", (req,res)=>{
//     console.log("about"+req.url)
//     res.send("hello about")
// })
// app.get("/contact",( req,res)=>{
//     res.status(200).send("contact")
// })
app.listen(3000,()=>{
    console.log(3000)
})