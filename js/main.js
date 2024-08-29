//const { options } = require("../routes/plants")

/*-----------------CACHED VARIABLES-----------------*/
const headerEl = document.querySelector('header')

const messageEl = document.querySelector('div.message')

const hardinessSelector = document.getElementById('select-hardiness')

const cycleSelector = document.getElementById('select-cycle')

const sunlightSelector = document.getElementById('select-sunlight')

const wateringSelector = document.getElementById('select-watering')

const plantListEl =document.querySelector('main.plant-list')

const buttonEl = document.querySelector('button')

const plantCardEl = document.querySelector('.plant-card')

const photoEl = document.querySelector('.photo')

const commonNameEl = document.querySelector('.common-name')

const descriptionEl = document.querySelector('.description')

const tagsListEl = document.querySelector('ul.plant-characteristics')

const tagEl = document.querySelector('.tag')

const footerEl = document.querySelector('footer')

const paginationEl = document.querySelector('ul.pagination')

const currentPageEl = document.querySelector('#current')

const nextPageEl = document.querySelector('#next')

const previousPageEl = document.querySelector('#previous')

/*-----------------STATE-----------------*/

let plants

let page

let currentUrl
/*-----------------RENDER-----------------*/

function render () {
    //clears out main div 
    plantListEl.innerHTML = ''
    displayMessage()
    setPagination()
    
    //populates plant list
    plants.forEach(plant => {
        //create card elements
        const plantCardEl = document.createElement('div')
        const photoEl = document.createElement('div')
        const commonNameEl = document.createElement('h3')
        const descriptionEl = document.createElement('p')
        const newCardText = document.createElement('div')
        const newTagsList =document.createElement('ul')
        const newCycleTag = document.createElement('li')
        const newSunlightTag1 = document.createElement('li')
        const newSunlightTag2 = document.createElement('li')
        const newSunlightTag3 = document.createElement('li')
        const newSunlightTag4 = document.createElement('li')
        const newWateringTag = document.createElement('li')
        //add content to card
        if (plant.default_image) {
             photoEl.style.backgroundImage = `url(${plant.default_image.original_url})`
        } else {
            photoEl.style.backgroundImage = `url(https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png)`
        }
        commonNameEl.innerText = plant.common_name
        descriptionEl.innerText = plant.scientific_name
        newCycleTag.innerText = plant.cycle
        newSunlightTag1.innerText = plant.sunlight[0]
        newSunlightTag2.innerText = plant.sunlight[1]
        newSunlightTag3.innerText = plant.sunlight[2]
        newSunlightTag4.innerText = plant.sunlight[3]
        newWateringTag.innerText = plant.watering
        //add classes to card
        plantCardEl.classList.add('plant-card')
        photoEl.classList.add('photo')
        newCardText.classList.add('card-text')
        descriptionEl.classList.add('description')
        newCycleTag.classList.add('tag')
        newSunlightTag1.classList.add('tag')
        newSunlightTag2.classList.add('tag')
        newSunlightTag3.classList.add('tag')
        newSunlightTag4.classList.add('tag')
        newWateringTag.classList.add('tag')
        newTagsList.classList.add('plant-characteristics')
        //append card to main el
        plantListEl.append(plantCardEl)
        plantCardEl.append(photoEl)
        plantCardEl.append(newCardText)
        newCardText.append(commonNameEl)
        newCardText.append(descriptionEl)
        newCardText.append(newTagsList)
        newTagsList.append(newCycleTag)
        newTagsList.append(newSunlightTag1)
        if(plant.sunlight[1]) {
            newTagsList.append(newSunlightTag2)
        }
        if(plant.sunlight[2]) {
            newTagsList.append(newSunlightTag3)
        }
        if(plant.sunlight[3]) {
            newTagsList.append(newSunlightTag4)
        }
        newTagsList.append(newWateringTag)
        
        //console.log(plant.common_name)
        //console.log(plant.description)
        //console.log(plant.hardiness)
        //console.log(plant.cycle)
        //console.log(plant.sunlight)
        //console.log(plant.watering)
        //console.log(plant.default_image.small_url)
        //console.log(page)

    })
    
}

function setPagination() {
    
    //previous page
    if(page > 1) {
        //const previousPageEl = document.createElement('li')
        previousPageEl.innerHTML = `Previous page`
        paginationEl.append(previousPageEl)
        previousPageEl.classList.add('pageNumber', 'previous', 'underline')
    }
    //current page
    //const currentPageEl = document.createElement('li')
    currentPageEl.innerHTML = `Page ${page} of ${lastPage}`
    paginationEl.append(currentPageEl)
    currentPageEl.classList.add('pageNumber', 'bold')

    //next page
    if(lastPage > page) {
        //const nextPageEl = document.createElement('li')
        nextPageEl.innerHTML = `Next page`
        paginationEl.append(nextPageEl)
        nextPageEl.classList.add('pageNumber', 'next', 'underline')
    } else nextPageEl.innerHTML = ''
}

function displayMessage() {
    messageEl.innerHTML=`${results} plants found`
}

/*-----------------POPULATE DROPDOWNS-----------------*/

//arrays of possible options

let hardinessOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

let cycleOptions = ['perennial', 'annual', 'biennial', 'biannual']

let sunlightOptions = ['full_shade', 'part_shade', 'sun-part_shade', 'full_sun']

let wateringOptions = ['frequent', 'average', 'minimum', 'none']

setDropdowns()

function setDropdowns() {
    hardinessDropDown()
    cycleDropDown()
    sunlightDropDown()
    WateringDropDown()
}

function hardinessDropDown() {
    hardinessOptions.forEach( function(zone, idx) {
       //create new option
       const newHardinessOption = document.createElement('option')
       //console.log(newHardinessOption)
       //set new option's text
        newHardinessOption.innerText = zone
       //append new option to hardiness select element
       hardinessSelector.append(newHardinessOption)
    });
}

function cycleDropDown() {
    cycleOptions.forEach( function(cycle, idx) {
       //create new option
       const newCycleOption = document.createElement('option')
       //console.log(newCycleOption)
       //set new option's text
       newCycleOption.innerText = cycle
       //append new option to cycle select element
       cycleSelector.append(newCycleOption)
    });
}

function sunlightDropDown() {
    sunlightOptions.forEach( function(sunlightAmt, idx) {
       //create new option
       const newSunlightOption = document.createElement('option')
       //console.log(newSunlightOption)
       //set new option's text
       newSunlightOption.innerText = sunlightAmt
       //append new option to sunlight select element
       sunlightSelector.append(newSunlightOption)
    });
}

function WateringDropDown() {
    wateringOptions.forEach( function(WaterAmt, idx) {
       //create new option
       const newWateringOption = document.createElement('option')
       //console.log(newWateringOption)
       //set new option's text
       newWateringOption.innerText = WaterAmt
       //append new option to watering select element
       wateringSelector.append(newWateringOption)
    });
}
/*-----------------DEFINE PAGINATION-----------------*/

//array of all possible page options
let pageOptions = []
for (let i = 1; i < 338; i++) {
    pageOptions.push(i)
  }

/*-----------------EVENT LISTENERS-----------------*/

//when find plants button is clicked, run fetch call with the parameters from the dropdowns and run the render function to populate plant list
buttonEl.addEventListener('click', async function() {
//console.log('button clicked')

    let hardiness = hardinessSelector.value;
    let cycle = cycleSelector.value;
    let sunlight = sunlightSelector.value;
    let watering = wateringSelector.value;

    let url = 'https://perenual.com/api/species-list' 
    console.log(hardiness, cycle, sunlight, watering)
    if(hardiness) url += url.includes('?') ? `&hardiness=${hardiness}` : `?hardiness=${hardiness}`
    if(cycle) url += url.includes('?') ? `&cycle=${cycle}` : `?cycle=${cycle}`
    if(sunlight) url += url.includes('?') ? `&sunlight=${sunlight}` : `?sunlight=${sunlight}`
    if(watering) url += url.includes('?') ? `&watering=${watering}` : `?watering=${watering}`
    currentUrl = url
    
    
    const obj = await makeRequest(url)
    plants = obj.data
    page = obj.current_page
    lastPage = obj.last_page
    //nextPage = page + 1
   // previousPage = page - 1
    results = obj.total
    render()
})

//when next page element is clicked, change the results to the next page
nextPageEl.addEventListener('click', async function() {
    console.log('NEXT!')
    page += 1

    let url = currentUrl += `&page=${page}`

    const obj = await makeRequest(url)

    plants = obj.data
    render()
}) 

//when previous page element is clicked, change the results to the previous page
previousPageEl.addEventListener('click', async function() {
    console.log('NEXT!')
    page -= 1

    let url = currentUrl += `&page=${page}`

    const obj = await makeRequest(url)

    plants = obj.data
    render()
}) 

async function makeRequest(url) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({url})
    }

    const resObj = await fetch('http://localhost:3000/plants', options)
    return await resObj.json()
}
