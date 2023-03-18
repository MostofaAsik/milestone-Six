// const numbers1 = [2, 4, 6, 9]
// function getDouble(parameter) {
//     const output = [];
//     for (const number of parameter) {
//         const double = doubleIt(number);
//         console.log(sum)
//         output.push(double)

//     }
//     return output;
// }

// function doubleIt(num) {
//     return num * 2;
// }



// const result = getDouble(numbers);
// console.log(result)



//////map >>>>>>>>>>>

const numbers = [2, 4, 6, 9]
const doubleIt = num => num * 2;
const makeDouble = numbers.map(doubleIt);
console.log(makeDouble)

const numbers1 = [2, 4, 6, 9]
const sum = numbers1.map(num => num + 1)
console.log(sum)

const fiveTimes = [1, 2, 3, 4, 5].map(x => x * 5);
console.log(fiveTimes)

const products = [
    { id: 1, name: "laptop", price: 45000 },
    { id: 2, name: "tablet", price: 25000 },
    { id: 3, name: "mobile", price: 15000 }
]

const productName = products.map(product => product.name)
console.log(productName)



