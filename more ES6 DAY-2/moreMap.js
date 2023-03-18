const numbers = [12, 24, 28, 30, 32]
const half = numbers.map(x => x / 2)

console.log(half)

const friends = ["Tom latham", "Tom ben", "tom Cart", "tom bin"]
const firstLetter = friends.map(fl => fl[4])
console.log(firstLetter)

const nameLengths = friends.map(friend => friend.length)
console.log(nameLengths)