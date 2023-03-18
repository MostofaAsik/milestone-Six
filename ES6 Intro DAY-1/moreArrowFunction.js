//Double ParaMeter
const add = (first, second) => first + second;
const result = add(12, 12)
console.log(result)

const fullName = (firstName, secondName) => firstName + ' ' + secondName;
const name = fullName("mostofa", "Asik")
console.log(typeof name)
console.log(name)

//multiParameter
const multiParameter = (a, b, c, d, e) => a + b + c + d + e;

//No Parameter
const noParameter = () => 3.14

//one ParaMeter
const oneParameter = (num) => num * 2;

//one parameter simple version
const oneParameterSimple = num => num * 5;   //one parameter no need to  firstBracket

//multiLine arrow function
const doMath = (x, y, z) => {
    const firstSum = x + y;
    const secondSum = y + z;
    const multiply = firstSum * secondSum;
    return multiply;
}
const allTotal = doMath(10, 20, 30)
console.log(allTotal)


const division = (num1, num2) => console.log(num1 / num2)