// const loadQoute = () => {
//     fetch('https://api.kanye.rest/')
//         .then(res => res.json())
//         .then(data => displayQoute(data))

// }
// const displayQoute = parameter => {
//     console.log(parameter);
//     const blockQoute = document.getElementById('quote')
//     blockQoute.innerHTML = parameter.quote;
// }
// loadQoute()

//2nd time

const loadQoute = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQoute(data))
}

const displayQoute = parameter => {
    console.log(parameter);
    const blockQoute = document.getElementById('quote')
    blockQoute.innerHTML = parameter.quote;
}
loadQoute()