const express = require('express');
const bodyParser = require("body-parser");
const route = require('../src/routes/users')
const port = 5004;

console.log(route)
const InitMongo = require('../src/config/mongo-db');
InitMongo();

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));

// routers 
app.get('/',(req,res)=>{ 
    res.end('welcome to node express')
})
/** 
* @router middleware
* @router - /api/user/
* @method- 
*/

app.use('/api/user', route);
app.listen(port,()=>{console.log(`http://localhost:${port}`)})