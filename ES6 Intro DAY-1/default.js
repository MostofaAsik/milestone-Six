//process 1
// function add(firstNumber, secondNumber) {

//     console.log(firstNumber, secondNumber)
//     if (secondNumber === undefined) {
//         secondNumber = 0;
//     }
//     const total = firstNumber + secondNumber;
//     return total;
// }
// const result = add(10);
// console.log(result);



// process 2
// function add(num1, num2) {
//     num2 = num2 || 0;
//     console.log(num1, num2)
//     const total = num1 + num2;
//     return total;
// }
// const result = add(10)
// console.log(result);


//###Process--3>>>>ES6  ---Default Parameter
function add(num1, num2 = 0) {     //num2=0 >>Default Parameter
    const total = num1 + num2;
    return total;
}
const result = add(10);
console.log(result)