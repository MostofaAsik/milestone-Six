//function declaration
function add(num1, num2) {
    const total = num1 + num2;
    return total;
}
const result = add(10, 20)
console.log(result)


//function expression
const add1 = function add1(num1, num2) {
    const total = num1 + num2;
    return total;
}
const result1 = add1(10, 40)
console.log(result1)
const add2 = function (num1, num2) {
    const total = num1 + num2;
    return total;
}
const result2 = add1(10, 70)
console.log(result2)




const add3 = function (num1, num2) {
    return num1 + num2;
}
///Arrow Function>>>>>>>Syntax
const arrowFunction = (num1, num2) => num1 + num2;
const result4 = arrowFunction(40, 50)
console.log(result4)