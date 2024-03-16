// function add(a, b) {
//     console.log(`the sum of two numbers are: ${a+b}`);
// }

// function sub(a, b) {
//     console.log(`the subtraction of two numbers are: ${a-b}`);
// }
// module.exports = {
//     addFn: add,
//     subFn: sub
// };


exports.add = add = (a, b) => a + b;
exports.sub = sub = (a, b) => a - b;