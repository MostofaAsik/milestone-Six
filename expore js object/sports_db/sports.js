const searchAllData = () => {
  const inputField = document.getElementById('search-value')
  const inputFieldValue = inputField.value
  inputField.value = ''
  document.getElementById('singlePlayer').innerHTML = ''
  document.getElementById('male').classList.add("d-none")
  document.getElementById('female').classList.add("d-none")

  const url = `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${inputFieldValue}`
  fetch(url)
    .then(res => res.json())
    .then(data => displayplayer(data.player))
}

//enter button handler
document.getElementById('search-value').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    // code for 
    searchAllData()
  }
});

const displayplayer = (players) => {
  // console.log(players);
  const conatainer = document.getElementById('player-container')
  conatainer.innerHTML = ''
  for (const player of players) {
    // console.log(player.idPlayer);
    const div = document.createElement("div")
    div.classList.add("col")
    div.innerHTML = `
    <div class="card h-100">
      <img src="${player.strThumb ? player.strThumb : "https://source.unsplash.com/random/200x200?sig=2"}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${player.strPlayer}</h5>
        <p class="card-text">Nationality : ${player.strNationality}</p>
      </div>
      <button onclick="singlePlayersDetails('${player.idPlayer}')" type="button" class="btn btn-success">Details</button>
    </div>
    `
    conatainer.appendChild(div)
  }
}

const singlePlayersDetails = playerId => {
  // console.log(playerId);
  const url = `https://www.thesportsdb.com/api/v1/json/3/lookupplayer.php?id=${playerId}`
  // console.log(url);
  fetch(url)
    .then(res => res.json())
    .then(data => displyaSinglePlayer(data.players[0]))
}
const displyaSinglePlayer = Player => {
  console.log(Player);
  const { strThumb, strPlayer, strGender } = Player
  const singlePlayerContainer = document.getElementById('singlePlayer')

  const div = document.createElement('div')
  if (strGender === "Male") {
    document.getElementById('male').classList.remove("d-none")
  }
  else {
    document.getElementById('female').classList.remove("d-none")
  }
  div.innerHTML = `

  <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${Player.strThumb}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Name:${strPlayer}</h5>
        <p class="card-text">Gender:${strGender}</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
  `
  singlePlayerContainer.appendChild(div)
}
