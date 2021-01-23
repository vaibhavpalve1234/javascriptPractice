// const { json } = require("express");

// let myName = "vaibhav";
// myName = "palve";
// let arr = []
// for(let i = 0; i<5; i++){
//     console.log(i);
//     arr[i] = i*2
//     console.log(arr)
// }
// for (let i = arr.length ; i> -1; i--){
//     console.log(arr[i]);
// }
// console.log(arr[1])
// const dict = {
//     key1:"vaibhav",
//     "12":"kk"
// }
// console.log(dict)
// const l =[
//     {firstName:123,lastName:"56"},
//     {firstName:13,lastName:"560"},
//     {firstName:23,lastName:"506"},
// ]
// console.log(l[1].firstName,l[1].lastName)
// // console.log(this.myName=1)
// console.log(l)
// const converter = JSON.stringify(l);
// console.log(converter)
// for(let i=0;i<6;i++){
//     console.log(i)
// }
// var first;
// for(first in l){
//     console.log(first)
// }
// for(let todo of l){
//     console.log(todo)
// }
// l.forEach((todo)=>{
//     console.log(todo)
// })
// const q= l.map((todo)=>{
//     console.log(todo)
//     return todo.firstName;
// })
// console.log(q)
// const s = l.filter((todo)=>{
//     console.log(todo)
//     return todo.firstName === false;
// }).map((todo)=>{
//     return todo.lastName
// })
// console.log(s)

//conditional
var x = 10;
if (x >5 && x > 15) {
  console.log("hello");
}else if( x > 10){
 console.log("hellllll")
}
else  {
  console.log(typeof null);
}

//turnari operatores
let e = 0;
const color = e >10?"yes":"no";
console.log(color)
switch (color) {
    case "yes":
        console.log("heklo");
        break;
    case "no":
        console.log("hahahah");
        break;
    default:
        console.log("heheheheheh")
        break;
}
function sum(a=1,b=1) {
    return a+b
    
}
console.log(sum(7,5))

const ss = (a,b)=>a+2+b

console.log(ss(5,12221))

function person(last,first,add) {
    this.last = last;
    this.first = first;
    this.add = new Date(add);
    this.kk = [1,2,3,4,5,57777777]
    this.kk1 = ()=>{
        return this.last
    }
}
person.prototype.ggv= function dd() {
    return console.log(this.kk1())
}
const cc= new person("vap",'pal','ll');
console.log(cc.ggv())


class person1 {
    constructor(l){
        this.l1 = l;
    }
    mode(){
        console.log(this.l1)
    }
}
const pe = new person1("q")
console.log(pe.mode());


