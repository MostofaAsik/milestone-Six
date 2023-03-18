const loadData = () => {
  const inputElement = document.getElementById('search-value')
  document.getElementById("single-player-details").innerHTML = ''
  document.getElementById('male').classList.add('d-none')
  document.getElementById('female').classList.add('d-none')
  const inputValue = inputElement.value
  const URL = `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${inputValue}`;
  console.log(URL);
  fetch(URL)
    .then(res => res.json())
    .then(data => displayPlayer(data.player))
}

const displayPlayer = players => {
  // console.log(players);
  document.getElementById('search-value').value = ''
  const container = document.getElementById('player-info')
  container.innerHTML = ''
  players.forEach(player => {
    console.log(player)
    const { strPlayer, strThumb, strNationality, idPlayer } = player
    const div = document.createElement('div')
    div.classList.add('col')
    div.innerHTML = `
    <div class="col">
      <div class="card">
        <img src="${strThumb ? strThumb : "https://source.unsplash.com/random/200x200?sig=2"}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${strPlayer}</h5>
          <p class="card-text">${strNationality}</p>
        </div>
        <button onclick="singlePlayer('${idPlayer}')" type="button" class="btn btn-danger">Details</button>
<button type="button" class="btn btn-primary">Delete</button>
      </div>
    
    `
    container.appendChild(div)

  });


}

const singlePlayer = (id) => {
  // console.log(id);
  const URL = `https://www.thesportsdb.com/api/v1/json/3/lookupplayer.php?id=${id}`
  // console.log(URL);
  fetch(URL)
    .then(res => res.json())
    .then(data => singlePlayerDetails(data.players[0]))
}
// right side function  
const singlePlayerDetails = (playersDetails) => {
  console.log(playersDetails);
  const { strThumb, strPlayer, strNationality, strGender } = playersDetails;

  const container = document.getElementById("single-player-details")

  const div = document.createElement('div')
  if (strGender === "Male") {
    const male = document.getElementById('male')
    male.classList.remove('d-none')
  }
  else {
    const female = document.getElementById('female')
    female.classList.remove('d-none')
  }
  div.innerHTML = `
  <div class="card mb-3 w-100 h-100" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${strThumb}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${strPlayer}</h5>
        <p class="card-text">Nationality:${strNationality}</p>
       
      </div>
    </div>
  </div>
</div>
  `
  container.appendChild(div)
}
// loadData();