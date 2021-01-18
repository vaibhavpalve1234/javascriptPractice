// const http = require("http");
// const server = http.createServer((req,resp)=>{
//     resp.end("completed");

// });
// server.listen(3000,(req,resp)=>{
//     console.log(`http://localhost:${3000}`);
// });

const express = require("express");
//  console.log(express)
const path = require("path");
const members = require("./Members");
const logger = require("./middleWare/logger")
const app = express();

// init middleware 
// app.use(logger);
// app.get("/",(res,resp)=>{
//     resp.sendFile(path.join(__dirname,"public","index.html"));
// });

// gets json all  members
app.get("/api/members", (req, resp) => {
  resp.json(members);
});
app.get('/api/members/:id',(req,resp)=>{
    const found = members.some(member => member.id === parseInt(req.params.id));
    resp.json(members.filter(meber => members.id === req.params.is));

});
//set static folder
app.use(express.static(path.join(__dirname, "public")));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
