const express = require('express');
const app = express();
app.use(express.static(__dirname + "/public"))



function decodQueryBase64(req,res,next){
    for(let q of req.query){
        let data = req.query[q]
         data = new Buffer(data, 'base64').toString('ascii')
        console.log(req.query[q] = data)
    }
    next()
}

app.get("/eval", decodQueryBase64, (req,res)=>{
    console.log(req.query)
    res.send('========eval==========')

})

app.listen(3000,()=>{
    console.log("hello ")
})
