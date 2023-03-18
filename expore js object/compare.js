// const first = { a: 2 };
// const second = { a: 2 };
// const third = second;
// if (first === second) {
//     console.log("they are same");
// }
// else if (second === third) {
//     console.log("sec = third");
// }
// else {
//     console.log("Different");
// }
const first = { a: 5, b: 2, d: 5 };
const second = { a: 5, c: 5, b: 2 };
function compareObjects(first, second) {
    const firstKeys = Object.keys(first)
    const secondkeys = Object.keys(second)
    if (firstKeys.length === secondkeys.length) {
        // console.log("first and second");

        for (const key of firstKeys) {
            // console.log(key);
            if (first[key] !== second[key]) {
                return false;
            }
        }
        return true;
    }
    else {
        // console.log("no");
        return false;
    }
}
console.log(compareObjects(first, second));
