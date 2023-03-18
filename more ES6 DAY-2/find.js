const numbers = [12, 5, 78, 54, 63, 33, 45, 67]
const divisionBy5 = numbers.find(num => num % 5 === 0)
const divisionBy5All = numbers.filter(num => num % 5 === 0)
console.log(divisionBy5)
console.log(divisionBy5All)

const products = [
    { id: 1, name: "laptop", price: 45000 },
    { id: 2, name: "tablet", price: 25000 },
    { id: 3, name: "mobile", price: 15000 }
];
const firstProduct = products.find(x => x.price > 20000)
console.log(firstProduct)