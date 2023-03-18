const loadUser = () => {
    fetch('https://randomuser.me/api/?gender=female')
        .then(res => res.json())
        .then(data => displayUser(data))
}

const displayUser = user => {
    const genderTag = document.getElementById('gender')
    genderTag.innerHTML = user.results[0].gender;
    const nameTag = document.getElementById('name')
    nameTag.innerText = user.results[0].name.title + ' ' + user.results[0].name.first + ' ' + user.results[0].name.last
    const image = document.getElementById('image');
    image.innerHTML = `
    <img src ="${user.results[0].picture.large}"/>
    `

    console.log(user.results[0].picture);
}
loadUser()