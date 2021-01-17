const express = require("express");
const app = express();

app.get("/",(req,resp)=>{
    resp.send("hello world")
});

app.get("/aline",(req,resp)=>{
    // const id = req.query.id
    resp.send("hello student");
});
app.listen(9987, (req,resp)=>{
    console.log("rumming.. ");
    console.log("rumming.. "+ req);
    
});