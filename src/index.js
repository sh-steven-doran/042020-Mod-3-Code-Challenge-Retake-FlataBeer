document.addEventListener("DOMContentLoaded", function(){
    const beerList = document.getElementById("beer-list")
    const beerDiv = document.getElementById("beer-detail")
    console.log(beerDiv)


    function fetchBeerName(){
        fetch(`http://localhost:3000/beers`)
        .then(response => response.json())
        .then(beerInfo => {
           beerInfo.forEach(indivBeer => {
            const li = document.createElement("li")
            li.innerHTML = `${indivBeer.name}`
            li.className = "list-group-item"
            li.dataset.id = indivBeer.id
            beerList.appendChild(li)
           })
        })
    }


    document.addEventListener("click", function(event){
        if (event.target.className === "list-group-item"){
            console.log(event.target)
        const id = parseInt(event.target.dataset.id)

        fetch(`http://localhost:3000/beers/${id}`)
        .then(response => response.json())
        .then(moreBeerInfo => {
            beerDiv.innerHTML = `<h1>Beer Name</h1>
            <img src=${moreBeerInfo.image_url}>
            <h3>${moreBeerInfo.tagline}</h3>
            <p>${moreBeerInfo.description}</p>`
        })
    }})




   









fetchBeerName();

})
