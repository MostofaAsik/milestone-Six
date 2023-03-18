function allComents() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(data => displayComment(data))
}

function displayComment(comments) {
    // console.log(comments);
    const container = document.getElementById('container')
    for (const comment of comments) {
        console.log(comment);
        const divComment = document.createElement('div')
        divComment.classList.add('color')
        divComment.style.backgroundColor = 'tomato'
        divComment.style.borderRadius = '20px'
        divComment.style.paddingLeft = '20px'
        divComment.style.paddingTop = '20px'
        divComment.style.paddingBottom = '20px'
        divComment.style.marginTop = '20px'
        divComment.innerHTML = `
        <h3>User-Id:${comment.id} </h3>
        <h1>User-Name${comment.name} </h1>
        <h4>User-Email:${comment.email} </h4>
        <p>User-Description:${comment.body} </p>
        `
        container.appendChild(divComment)
    }
}
allComents()