// console.log("yeah  its working");

const loadPost = () => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displaydata(data))
    .catch((err) => {
      console.log(err);
    })

}

const displaydata = allData => {
  // console.log(allData.slice(0, 5));
  const postInfo = document.getElementById('post-info')
  for (const singledata of allData) {
    console.log(singledata);
    const div = document.createElement('div')
    div.innerHTML = `
    <h2 class="text-2xl font-bold">Title: ${singledata.title} </h2>
    <h3 class="font-semibold"> User-id: ${singledata.id} </h3>
    `
    postInfo.appendChild(div)
  }
}
loadPost()