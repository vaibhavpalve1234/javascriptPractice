
// const fs = require('fs');

// // directory path
// const dir = './views';

// // create new directory
// fs.mkdir(dir, (err) => {
//     if (err) {
//         console.error("error");
//     }
//     console.log("Directory is created.");
// });






// const fs = require('fs');

// // directory path
// const dir = './views';

// // create new directory
// try {
//     // first check if directory already exists
//     if (!fs.existsSync(dir)) {
//         fs.mkdirSync(dir);
//         console.log("Directory is created.");
//     } else {
//         console.log("Directory already exists.");
//     }
// } catch (err) {
//     console.log(err);
// }

// fs.writeFileSync("vap/bio.txt","my name is.....");
// fs.appendFileSync("vap/bio.txt","to my class");
// const data = fs.readFileSync("vap/bio.txt","utf-8");
// console.log(data);
// fs.renameSync("vap/Bio.txt","vap/mybio.txt");
// fs.unlinkSync("vap/mybio.txt");
// fs.rmdirSync("vap");