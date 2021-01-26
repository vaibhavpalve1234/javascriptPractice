const express = require('express');
const app = express()
app.listen(3000,()=>{
    console.log('server is live on http://localhost:3000')
})
app.get("/hello",(res,req)=>{
    console.log("hello" + res.url)
    req.send("hello")
})
app.get("/",(req,res)=>{
    console.log('first page' + req.url)
    res.send("welcome to server")
})
app.use("/public",express.static(__dirname + "/public"))