const numbers = [2, 4, 1, 9, 3, 5, 26, 2]
const [a, b, ...c] = numbers;
console.log(a, b, c)

const newArray = Math.max(...numbers);
console.log(newArray)


//main part array spread
const numbers2 = [32, 45, 67]
const numbers3 = [...numbers2]
numbers2.push(33)
numbers3.push(99)
console.log(numbers2)
console.log(numbers3)