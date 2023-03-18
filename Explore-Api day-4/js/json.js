const user = { id: 1, name: "gorib amir", job: 'actor' }

const stringfied = JSON.stringify(user)
console.log(user);
console.log(stringfied);

const shop = {
    name: "alia",
    address: {
        street: "mirpur",
        city: "ranbir",
        country: "BD"
    },
    products: ["laptop", "mic", "phone"],
    revenue: 39000,
    isOpen: true,
    isNew: false,
}
console.log(shop);
const stringJSON = JSON.stringify(shop)
console.log(stringJSON);
const convertObject = JSON.parse(stringJSON)
console.log(convertObject);