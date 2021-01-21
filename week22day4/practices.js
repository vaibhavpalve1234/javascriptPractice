//callback functions
console.log("callback function");
const func1 = () =>{
    setTimeout( () =>{
        console.log("hi")
    }, 1000)
    console.log("end")
}
func1();

const getRollNumber = ()=>{
    setTimeout(() => {
        console.log('1112212');   
        let  roll_no = [1,2,3,4,5,6];
        console.log(roll_no)

        setTimeout((rollno) => {
            const bioData = {
                name:"vaibhav",
                age:21
            }
            console.log(`my roll no is ${ rollno}   my name is ${bioData.name} and i am  ${bioData.age} years old`);
            setTimeout((name) => {
                bioData.gender = "male";
                console.log(bioData.gender);

            }, 2000, bioData.name);
        }, 2000, roll_no[1]);
    },2000);
}
getRollNumber();



























// const express = require("express");
// const app = express();
// const users  = require("./consentration");
// app.get("/",function(req,res){
//     res.send("welcome");
// });
// app.get("/user/:id",(req,res) =>{
//     console.log(req.params)
//     const user = users.filter(i => i.id == req.params.userId);
//     if (user.length){
//         res.json(user[0])
//     }
//     else{
//         res.json({
//             message:"user not found"
//         })
//     }

// })
// app.listen(3000,()=>{
//     console.log("http://localhost:3000");
// });
