// function loadUsers2() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => response.json())
//         .then(data => displayData2(data))
// }
// function displayData2(users) {
//     const ul = document.getElementById('user-list')
//     for (const user of users) {
//         // console.log(user.name);
//         const li = document.createElement('li')
//         li.innerText = user.name
//         ul.appendChild(li)
//     }
// }


//2nd Time

// function loadUsers2() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => response.json())
//         .then(data => displayData2(data))
// }
// function displayData2(users) {
//     for (const user of users) {
//         console.log(user.name);
//         const ul = document.getElementById('user-list')
//         const li = document.createElement('li')
//         li.innerText = user.name;
//         ul.appendChild(li)
//     }
// }

//3rd Time

function loadUsers3() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(respons => respons.json())
        .then(data => displayData3(data))
}
function displayData3(users) {
    // console.log(users);
    for (const user of users) {
        const ul = document.getElementById('user-list')
        const li = document.createElement('li')
        li.innerText = user.name
        ul.appendChild(li)
    }
}

const stuInfo = JSON.stringify({ name: "James", roll: 3 });
console.log(stuInfo.name); 