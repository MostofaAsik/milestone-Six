//practice--1
let name = "Mostofa ASik"
const age = 34;
//practice-2
const templateString = `
${name}
${age}
`
console.log(templateString)
//practice--3
const oneParameter = num => num / 5;
console.log(oneParameter(60))
//practice-4
const doubleParameter = (x, y) => (x + 2) * (y + 2);
const result = doubleParameter(10, 20)
console.log(result)
//practice-4
const tripleParameter = (a, b, c = 3) => a * b * c;
console.log(tripleParameter(1, 3))

//practice-5
const doubleParameter2 = (x, y) => {
    const firstSum = x + 2;
    const secondSum = y + 2;
    const totalMultipy = firstSum * secondSum;
    return totalMultipy;
}
console.log(doubleParameter2(5, 7))

//practice-6
//
const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
const mapping = numbers.map(num => num * 5);
console.log(mapping)

//practice-7
const findOdd = [11, 12, 13, 14, 15, 10, 18, 20, 25]
const odd = findOdd.filter(num => num % 2 === 0);
console.log(odd)

//practice-8

const products = [
    { id: 1, name: "Laptop", price: 5000 },
    { id: 2, name: "Iphone", price: 1000 },
    { id: 3, name: "Tablet", price: 45000 },
    { id: 4, name: "Xiomi", price: 25000 },
    { id: 5, name: "Apple", price: 84000 }
];
const product = products.find(p => p.price === 5000);
console.log(product)

//practice-9

const person = {
    name: "MAS",
    fatherName: "ABU Sayeed",
    age: 23,
    id: 10
}
const { id } = person;
console.log(id)

//practice-10
const arrayNumber = [12, 13, 14, 15, 16]
const [first, second, third, fourth, fifth] = arrayNumber;
console.log(third)

//practice-11
const thirdParameter = (a, b, c = 7) => a + b + c;
console.log(thirdParameter(6, 7))
