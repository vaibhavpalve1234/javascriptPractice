const express = require("express");
const { url } = require("inspector");
// import express from "express";
const app  = express();

app.get( "",(req,resp) =>{
    if (req.url == "/"){
        console.log("working site.......");
        resp.end("welcome")
    }
});
const todo =[];
app.get("/todo",(req,res)=>{
    console.log(req.url+"working........")
    res.json(todo)
})


app.listen(5000,(req,resp)=>{
    console.log(`start a server using port :5000`)
})
