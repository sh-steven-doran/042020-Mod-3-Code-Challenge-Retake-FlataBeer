//-- As a user, when the page loads, I should see a list of beer names retrieved from an API on the left hand side of the screen.

//page load get request


document.addEventListener("DOMContentLoaded", (e) => {

const beerDetail = document.getElementById("beer-detail")
const beerUl = document.getElementById("beer-list")

const getBeers = () => {

 fetch("http://localhost:3000/beers")
 .then(response => response.json())
 .then(beers => renderBeers(beers))
}

const renderBeers = beers => {
    beerUl.innerHTML = ""
    beers.forEach(beer => {
   const beerLI = document.createElement("li")
   beerLI.className = "list-group-item"
   beerLI.dataset.id = beer.id
   beerLI.innerHTML = `${beer.name}`
   beerUl.append(beerLI)
})
}


document.addEventListener("click", function (event) {
   
if (event.target.data_id === beer.id) {

// const getBeerDetails = () => {

fetch("http://localhost:3000/beers/:id")
.then(response => response.json())
.then(beer => renderBeerDetails(beer))
}}

const renderBeerDetails = beer => {
beerDetail.innerHTML =`
<h1>${beer.name}</h1>
<img src=${beer.image_url}>
<h3>${beer.tagline}</h3>
<p>${beer.description}</p>'
    
}
getBeers()
})