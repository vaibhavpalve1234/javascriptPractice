const express = require('express');
const app = express();

let users = { }
app.set('view engine','hbs', )

app.get('/',(req,res)=>{
    res.render('index',{ users:Users.findAll()})
    
})
app.listen(3000,()=>{
    console.log('server on http://localhost:3000')
})