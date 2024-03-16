const fs = require('fs');
const os = require('os');
console.log(os.cpus().length);

// console.log("1");
// const result = fs.readFileSync("./contect.txt", "UTF-8");
// console.log(result);
// console.log("2");

console.log("1");

fs.readFile("./text1.txt", "UTF-8", (err, result) => {
    if (err) {
        console.log("nhi mil rahi hai");
    } else {
        console.log(result);

    }
});
console.log("2");