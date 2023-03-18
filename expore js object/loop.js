const bottle = {
    color: 'yellow',
    price: 50,
    isClean: true,
    capacity: 1
}

// first process>> for loop 
const keys = Object.keys(bottle)
for (const key of keys) {
    // console.log(b ottle[key]);
}
// console.log(keys);


//for in loop
for (const key in bottle) {
    console.log(key);
}