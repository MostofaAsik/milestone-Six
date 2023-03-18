const maxNumber = Math.max(12, 55, 44, 666, 99)
console.log(maxNumber);



// console.log(numbers)
// const max = Math.max(...numbers)
// console.log(max)
const numbers = [12, 13, 14, 6]
const numbers2 = [...numbers];
numbers.push(99)
numbers2.push(33)
console.log(numbers)
console.log(numbers2)

//craeting new array from existing array

const array1 = [12, 13, 14, 15]
const array2 = [11, ...array1, 17]
console.log(array1)
console.log(array2)
