const numbers = [12, 5, 78, 54, 63, 33, 45, 67]
const bigNumber = numbers.filter(number => number > 40)
const even = numbers.filter(x => x % 2 === 0)
console.log(even)
console.log(bigNumber)

const products = [
    { id: 1, name: "laptop", price: 45000 },
    { id: 2, name: "tablet", price: 25000 },
    { id: 3, name: "mobile", price: 15000 }
];
const product = products.filter(x => x.price > 20000)
console.log(product)
