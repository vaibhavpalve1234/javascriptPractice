const express = require("express");
// console.log(express())
const app = express();
const courses = [
{id:1,name:"vaibhav"},
{id:2,name:"palve"},
{id:3,name:"ram"},
];


app.get("/", (req,res) =>{res.status(404).send("hello world")});
app.get("/api/course", (req,res) =>{
    res.send(courses)
});
app.get("/api/course/:id",(req,res)=>{
   const course =  courses.find(c => c.id === parseInt(req.params.id));
   if (!course){
       res.status(404).send("page not found");
   }
   res.send(course)
});
app.post("/api/courses" , (req,res)=>{
    
})
app.get("/api/posts/:year/:months" , (req,res) =>{
    res.send(req.query);
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, (req,res) =>{
    console.log(`how to start server http://localhost:${PORT}....`)
});
// app.post()
// app.delete()
// app.put()




  let x = function() {
	  console.log("hello");
	  
};
function y (i){
	console.log("work remaining");
	i(y);
};
y(x)


myArr = [
	{number:1,name:"z"},
	{number:2,name:"x"},
	{number:3,name:"f"},
	{number:4,name:"r"},
	{number:9,name:"y"},
	{number:8,name:"j"},
	{number:7,name:"k"},
	{number:5,name:"l"},
	{number:6,name:"a"}
];
myArr.sort(function(val1,val2){
	if (val1.name < val2.name){
		return -1
	}
	else{
		return 1
	}
});
console.log(myArr);

function add (x, y){
	return x + y;
};
const extra = function (nums1, nums2,  refrence)  {
	return refrence(nums1,nums2);
};
console.log(extra(2,5,add))