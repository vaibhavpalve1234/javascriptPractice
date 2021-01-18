const chalk = require("chalk");
const http = require("http");
const fs = require("fs");
const server =http.createServer((request, response) =>{
    if (request.url == "/home"){
        response.end("home");
    }
    else if (request.url == "/about"){
        response.end("about");
    }
    else if (request.url == "/resume"){
        response.end("resume");
    }
    else{
        response.writeHead(404);
        response.end("404 error page not found");
    }
});

server.listen(3000,() =>{
    
})

const members = {
    name : "vaibhva",
    lastName:"palve",
    role:"none"
}
const read = JSON.stringify(members)
console.log(read)
const write = JSON.parse(read)
console.log(write);
fs.writeFile("package1.json","read",(err) =>{
    console.log("done");
});
fs.readFile("package1.json","utf-8",(err, data) =>{
    console.log(data)
})
