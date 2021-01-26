// function helloSayer(){
//     console.log("world")
//     return "hello"
// }
// console.log(()=>{
//     helloSayer()
// })
// // lexical arrow function and arrow function ?
// /*
// delay introduce
// */


let btnWait = document.getElementById('btnWait');
let btnCount = document.getElementById('btnCount');
let btnStatus = document.getElementById('btnStatus');
let btnVal = document.getElementById('btnVal');
//why comming null of console ?
//pahilehi execute ho jatahai evaluated ho jata hai
let count = 0
btnCount.onclick = function(){
    count++
    console.log(count)
    divVal.textContent = count
}
// btnWait.onclick = function(){
//     divStatus.textContent = 'waiting ....'
//     let start = Date.now()
//     while (Date.now()< start + 5000){
//         // noting in body
//     }
//     divStatus.textContent = 'Done'
//     console.log('done')
// }
btnWait.onclick = function(){
    divStatus.textContent = 'Waiting';
    console.log('waiting...')
    // wait 5 sec
    //Date.now() = what is mean ? => first jan 1970 was started (search 'epoch unix')
    // 2^32 how macth date =>
    // let start = Date.now()
    setTimeout(()=>{divStatus.textContent = "Done"
    console.log("done")},5000)
}

// 1 threts
// ans =  two type of hardware threat software threats
/*
alu ,intel, 2 thrats
its are jitani paraller process hotihe use threats kehte hai
tdm time divison model
*/
// 2 computer  calculte time counting
// dom object = document object model