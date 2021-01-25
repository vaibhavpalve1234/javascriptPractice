const express = require('express')
const app = express()
app.get("/", (res,req)=>{
    console.log("hello"+res.url)
    req.send("hello")
})
app.get('/hello',(req,res)=>{
    res.send('hello world')
})
app.use("/xyz",express.static(__dirname + '/public'))
app.listen(8090,()=>{
    console.log('server started on http://localhost:8090')
})
