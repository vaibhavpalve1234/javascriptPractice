// Array.prototype.we = Array.prototype.join
// Array.prototype.join = function (){
//     console.log("caaled on",this)
//     return this.we(...arguments)
// }
// class myName{
//     constructor(name, age){
//         this.name = name
//         this.age = age
 
//     }
//     isAdult(){
//         return this.age === 22
//     }

// }
// let p = new myName("vaibhav",22);
// let p2 = new myName("vaibhav",2);
// // console.log(p.__proto__.__proto__ == Object.prototype)
// console.log(p.isAdult())
// console.log(p.isAdult())


// class student extends myName {
//     constructor(name,age,rollNo){
//         super(name,age)
//         this.rollNo = rollNo
//     }
// }
// let s1 =  new student("vaibhav",15,2)
// console.log(s1)

//inheritance chain in es6
// es5
function Person(name,age){
    this.name = name
    this.age = age
}
let p1 = Person("vaibhav",12)
console.log(p1)
// inheritance not possible
// old think 