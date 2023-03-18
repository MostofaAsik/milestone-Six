// console.log("meme js loading");
// load data fro mAPI

const loadMeme = () => {

  fetch('https://meme-api.com/gimme/20')
    .then(res => res.json())
    .then(data => displaydata(data.memes))
}

const displaydata = allMemes => {
  // console.log(allMemes);

  const contanier = document.getElementById('section')
  allMemes.slice(0, 25).forEach(meme => {
    console.log(meme);
    const div = document.createElement('div')
    div.innerHTML = `
    <div class="card w-96 glass">
    <figure><img class="" src="${meme.url}" alt="car!"/></figure>
    
  </div>
    `
    contanier.appendChild(div)
  });
}
loadMeme()
