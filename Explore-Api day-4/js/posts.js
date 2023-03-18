// function loadPosts() {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(res => res.json())
//         .then(data => displayPosts(data))
// }

// function displayPosts(posts) {
//     const postContainer = document.getElementById('posts-container')
//     for (const post of posts) {
//         console.log(post);
//         const postDiv = document.createElement('div');
//         postDiv.classList.add('post')
//         postDiv.innerHTML = `
//         <h4>User- ${post.userId}</h4>
//         <h5>Post: title- ${post.title}</h5>
//         <p>Post Description: ${post.body}</p>
//         `
//         postContainer.appendChild(postDiv)
//     }
// }
// loadPosts()


//2nd time
// function loadPosts() {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(res => res.json())
//         .then(data => displayPosts(data))
// }

// function displayPosts(users) {
//     // console.log(users);
//     const container = document.getElementById('posts-container')
//     for (const user of users) {
//         console.log(user);
//         const divPosts = document.createElement('div')
//         divPosts.classList.add('post')
//         divPosts.innerHTML = `
//         <h3>Users Id-${user.id}</h3>
//         <h4>User Title-${user.title}</h4>
//         <p>User-Description:${user.body}</p>
//         `
//         container.appendChild(divPosts)

//     }
// }
// loadPosts()

// /3rd time 

function loadPosts4() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(resposne => resposne.json())
        .then(data => displyPost(data))
}

function displyPost(users) {
    // console.log(users);
    const container = document.getElementById('posts-container')
    for (const user of users) {
        // console.log(user);
        const divPost = document.createElement('div')
        divPost.classList.add('CSS')
        divPost.style.backgroundColor = 'tomato';
        divPost.style.paddingTop = '10px';
        divPost.innerHTML = `
        <h3>User-Id: ${user.id} </h3>
        <h4>User-title: ${user.title} </h4>
        <p>User-Description: ${user.body}</p>        
        `
        container.appendChild(divPost)
    }
}
loadPosts4()

