const express = require('express')
const app = express()
app.use("/xyz",express.static(__dirname + '/public'))
app.get("/", (res,req)=>{
    console.log("hello"+res.url)
    req.send("hello")
})
app.get('/hello',(req,res)=>{
    let name = 'guest'
    if(req.query.q)
    {   name = req.query.q 
    }
    res.send('hello world ' + name)
})
app.listen(5500,()=>{
    console.log('server started on http://localhost:5500')
})
