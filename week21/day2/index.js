
const fs = require("fs");
fs.writeFileSync("readwrite.txt","my class is amazing");
fs.appendFileSync("readwrite.txt"," new car taken by dada by in ulhasnagar");
fs.appendFileSync("readwrite.txt", "  mumbai is one of the best city on the world");
const new_name = fs.renameSync("readwrite.txt","readwrite1.txt");


fs.mkdir("./",)
