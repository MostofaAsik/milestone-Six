const bottle = {
    color: 'yellow',
    price: 50,
    isClean: true,
    capacity: 1
}
const keys = Object.keys(bottle)           //all property name like 'color,price,isClean, capacity'
const values = Object.values(bottle)   //all values name like'yellow ,50, true  ,1 '
// console.log(keys);

// const pair = Object.entries(bottle)    //showing with all values and keys at a  time
// console.log(pair);
console.log(bottle);
// Object.seal(bottle)  //after seal delete isnt working
Object.freeze(bottle)    //after freeze no other working
delete bottle.isClean;
delete bottle.capacity;
bottle.price = 1000   //after seal resign to existing property values
bottle.height = 12;   //after seal not reasign a new property
console.log(bottle);

