const http = require("http");
const server = http.createServer((req,resp)=>{
    resp.end("completed");
    
});
server.listen(3000,(req,resp)=>{
    console.log(`http://localhost:${3000}`);
});