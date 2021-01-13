const fs = require("fs");
fs.mkdir("vap",(err)=>{
    console.log("complted")
});

fs.writeFile("vap/read.txt","my name is vaibhav",(err)=>{
    console.log("complted");
});
