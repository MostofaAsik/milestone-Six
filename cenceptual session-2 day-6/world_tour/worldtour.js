
const loadCountries = () => {
  fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => {

      displayCountries(data.slice(0, 3))
    })

}

const displayCountries = countries => {
  // console.log(countries);
  const countryContainer = document.getElementById('countries-info')
  countryContainer.innerHTML = "";
  countries.forEach(country => {
    // console.log(country.cca2);
    const contentDiv = document.createElement('div')
    contentDiv.innerHTML = `
    <div class="card w-full h-full bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img class="h-full" src="${country.flags.png}" alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">${country.name.common}</h2>
    <p>Population: ${country.population}</p>
    <div class="card-actions">
      <button class="btn btn-primary">Details</button>
    </div>
  </div>
</div>
    `
    countryContainer.appendChild(contentDiv)

  });
}
loadCountries()



const showAllCountry = () => {
  fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))


}
