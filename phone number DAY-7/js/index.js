const loadPhones = async (inputFieldValue, dataLimit) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${inputFieldValue}`
    const res = await fetch(url)
    const data = await res.json()
    displayPhones(data.data, dataLimit);
}

const displayPhones = (phones, dataLimit) => {
    // console.log(phones);
    const phoneContainer = document.getElementById('phone-container')
    phoneContainer.innerHTML = ''
    const showAll = document.getElementById('show-all')
    if (dataLimit && phones.length > 10) {
        phones = phones.slice(0, 10)
        showAll.classList.remove('d-none')
    }
    else {
        showAll.classList.add('d-none')
    }

    const noPhone = document.getElementById('no-phone-mesage')
    if (phones.length === 0) {
        noPhone.classList.remove('d-none')
    }
    else {
        noPhone.classList.add('d-none')
    }
    phones.forEach(phone => {
        // console.log(phone);
        const { image, phone_name, slug } = phone
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div class="card p-5">
            <img src="${image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title"> ${phone_name}</h5>
                <p class="card-text">Brand:${slug}</p>
                <button onclick=loadPhoneDetails('${phone.slug}') class="btn btn-primary"data-bs-toggle="modal" data-bs-target="#phoneDetailModal" >Details</button>
                
            </div>
        </div>
       
       `
        phoneContainer.appendChild(div)
    });
    //stop loader
    toggleSpinner(false)
}

const processSearch = (dataLimit) => {
    toggleSpinner(true)
    const inputField = document.getElementById('input-filed')
    const inputFieldValue = inputField.value
    loadPhones(inputFieldValue, dataLimit)
}

document.getElementById('btn-search').addEventListener('click', function () {
    //start loader
    processSearch(10)
    inputField.value = ''

})

document.getElementById('input-filed').addEventListener('keypress', function (e) {
    // console.log(e.key);
    if (e.key === 'Enter') {
        processSearch(10)

    }
});

const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader')
    if (isLoading) {
        loaderSection.classList.remove('d-none')
    }
    else {
        loaderSection.classList.add('d-none')
    }
}
document.getElementById('btn-show-all').addEventListener('click', function () {
    processSearch()
})
const loadPhoneDetails = async (id) => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`
    const res = await fetch(url)
    const data = await res.json()
    displayPhoneDetails(data);
}
const displayPhoneDetails = phone => {
    console.log(phone);
    const modaltitle = document.getElementById('phoneDetailModalLabel')
    modaltitle.innerText = phone.data.name
    const phoneDetails = document.getElementById('phone-details')
    phoneDetails.innerHTML = `
    <h2>Release Date : ${phone.data.releaseDate}</h2>
    <p>${phone.data.mainFeatures.memory}</p>
    `

}

loadPhones('apple')