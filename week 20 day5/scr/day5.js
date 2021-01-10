const http = require("http");
const server =http.createServer((request,response) => {
    console.log(request.url);
    response.end("hello world")
})

server.listen(5000,()=>{
    console.log(`listing to http://localhost:5000`);
})