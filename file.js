const fs = require('fs');
// console.log(fs);


//writing the file
///sync... blocking operations
fs.writeFileSync("./text.txt ", " hello yeh humne new file bana di mitronnnn!!!!!!!");

///async non blocking operations
fs.writeFile("./text1.txt", "hello guys ......", (err, result) => {});


//reading the file
// const result = fs.readFileSync("./contect.txt", "UTF-8");
// console.log(result);

// fs.readFile("./contect.txt", "UTF-8", (err, result) => {
//     if (err) {
//         console.log("nhi mil rahi hai");
//     } else {
//         console.log(result);

//     }
// });
fs.cpSync("./contect.txt", "./copy.txt");
fs.unlinkSync("./copy.txt");
fs.mkdirSync("./my-doc");

// fs.appendFileSync("./text1.txt", new Date().getTime().toLocaleString());
// fs.appendFileSync("./text1.txt", `\n${Date.now()} hello from the server`)