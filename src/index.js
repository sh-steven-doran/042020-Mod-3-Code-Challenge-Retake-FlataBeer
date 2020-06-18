document.addEventListener('DOMContentLoaded', function(e) {
    const beerURL = 'http://localhost:3000/beers'
    const beerUL = document.getElementById('beer-list')
    const beerCard = document.getElementById('beer-detail')

    fetch(beerURL)
    .then(resp => resp.json())
    .then(beer => beer.forEach(element => {
        const beerLI = document.createElement('li')
        beerLI.className = 'list-group-item'
        beerLI.dataset.id = element.id
        beerLI.innerHTML = `
            ${element.name}
        `

        beerUL.append(beerLI)
    
        document.addEventListener('click', function(e){
            let id = e.target.dataset.id
            console.log(e.target)
            fetch(beerURL + `/${id}`)
            .then(resp => resp.json())
            .then(beer => {
                let displayBeer = document.createElement('div')
                displayBeer = ""
                displayBeer.innerHTML = `
                <h1>${beer.name}</h1>
                <img src=${beer.image_url}>
                <h3>${beer.tagline}</h3>
                <p>${beer.description}</p>
                `

                beerCard.append(displayBeer)
            })
        })
    }))
})