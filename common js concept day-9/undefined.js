/* 
8 ways to get undefined
*/

// process-1
let x;
// console.log(x);

//process-2
function total(a, b) {
    const resuly = a + b;
}
// console.log(total(10, 5));

//process-3
function third(a, b, c) {
    const total = a + b + c;
    console.log(a, b, c);

}
// third(10, 5)

//process-4
function noNegative(a, b) {
    if (a < 0 || b < 0) {
        return
    }
    return a + b;
}
// console.log(noNegative(2, -5));


//proces-5

const person = {
    id: 2,
    name: "mas",
    job: 'student'
}
// console.log(person.salary);


//process-6

const array = [11, 21, 13, 141, 15]
console.log(array[5])