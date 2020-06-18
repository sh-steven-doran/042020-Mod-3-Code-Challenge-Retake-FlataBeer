// -- As a user, when the page loads, I should see a list of beer names retrieved from an API on the left hand side of the screen.

// -- As a user, when I click a beer name, the application should reveal more information about that particular beer.

document.addEventListener("DOMContentLoaded", e => {

    const baseUrl = "http://localhost:3000/beers"
    const ul = document.querySelector("#beer-list")
 
    fetch(baseUrl)
    .then(resp => resp.json())
    .then(beers => {
       // console.log(beers)
       renderBeerList(beers)
    })
 
    const renderBeerList = beers => {
        beers.forEach(beer => {
        ul.innerHTML += `
        <li class="list-group-item" data-id="${beer.id}" >${beer.name}</li>`
        
        })
       }
       
    
    
       ul.addEventListener("click", e => {
        if (e.target.className === "list-group-item") {
       const beerId = e.target.dataset.id
       fetch(`${baseUrl}/${beerId}`)
       .then(resp => resp.json())
       .then(beer => {
         renderBeer(beer)
       })
     
            
        }
    })
 
    const renderBeer = beer => { 
        const showDiv = document.querySelector("#beer-detail")
        showDiv.innerHTML =`
          <h1>${beer.name}</h1>
          <img src="${beer.image_url}">
          <h3>${beer.tagline}</h3>
          <p>${beer.description}</p>
        `
          }
    
 })
 