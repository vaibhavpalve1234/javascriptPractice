const express = require('express');
const expressSession = require('express-session');

const app = express();

app.set('view engine','hbs' )

app.use(expressSession({
    resave:true,//saves the cookies on each clien <--> comunication
    saveUninitialized: true, //save cookies even if nothing to track
    secret:'some long random string here', // used to encrypt the cookie

}))

app.get('/',(req,res)=>{
    count++
    res.render('index',{count})
    
})
app.listen(3000,()=>{
    console.log('server on http://localhost:3000')
})