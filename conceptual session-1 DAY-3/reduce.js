const numbers = [1, 2, 3, 4, 5];

// with loop 
// let sum = 0;
// for (const number of numbers) {
//     sum += number;
// }
// console.log(sum);

const sum = numbers.reduce((privious, current) => {
    return privious + current;

}, 0)
console.log(sum);