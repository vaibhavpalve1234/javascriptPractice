const express = require('express');

const app = express();

app.get('/',(req, res, next) =>{
    res.send({
        message:'we here to solve your issue 🍔🍔'
    })
})

app.listen(3000,()=>{
    console.log('http://localhost:3000');
})