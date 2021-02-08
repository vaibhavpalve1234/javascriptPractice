const http = require('http');
const fs =  require('fs');
const { type } = require('os');
const hostname = 'localhost';
const port = 3001;

// const server = http.createServer((req,res)=>{

//     res.setHeader('content-Type', 'text/html');
//     res.write('<body class="app"></body>');
//     res.write('<h3> Welcome to ckmobile</h3>');
//     res.write('<p>This is Node.js course</p>')
//     res.end()
// })
const server = http.createServer((req,res)=>{
    res.setHeader('content-Type', 'text/html');
    let route = "./view/";
    switch (req.url){
     case '/':
        route +='index.html'
        res.statusCode = 200;
        break;
     case '/contact':
         route +='contact.html'
         res.statusCode = 200;
         break;
    case '/contact-us':
        res.statusCode = 301
        res.setHeader('location','/contact');
        res.end()
        break
    default:
         route +='error.html'
         res.statusCode = 400;
         break;
}
    fs.readFile(route,(err,data )=>{
       if(!err){
           res.write(data)
           console.log(data.toJSON())
           res.end()
       }
       else{
           console.log(err)
           res.end()
        }
   })
})



server.listen(port,()=>{
    console.log(`listenin on port ${port}`)
})