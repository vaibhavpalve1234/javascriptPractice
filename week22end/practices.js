function a(arg1){
    let var1 = 20
    console.log("hello");
    function b(arg2){
        let var2 = 10
        console.log(arg1,var1,arg2,var2)
    }
    console.log(arguments)
    return b
}
const v = a("myClass");
// console.log(v);
v("hello");


const a1 = Array();
a1.push(1);
a1.push(5);
a1.push(17);
a1.push(17);
a1.unshift(-2,10,65);
console.log(a1)
console.log(a1.pop())
console.log(a1)

// console.log(Array(5).fill(0))
// console.log(a1.length)



const ab = [1,4,3]
const ba = [5,3,21,5]
const cb = [...ab,...ba]
console.log(cb)
// cb.find(1 => 1 === 1)