document.addEventListener("DOMContentLoaded", (e) =>{

    const base_URL = "http://localhost:3000/beers"
    const beer_URL = "http://localhost:3000/beers/:id"

    const getBeer = () => {
        fetch(base_URL)
        .then(resp => resp.json())
        .then(json => {renderBeers(json)
        })
    }

    const renderBeers = beers => {
        beers.forEach(beer => {
            renderBeer(beer)
        })
        console.log(renderBeer(beer))
    }


    const renderBeer = beer => {
        const beerUl = document.getElementById('beer-list')
        const beerLi = document.createElement('li')
        li.classname = "list-group-item"
        li.innerHTML = `
        <li class="list-group-item">${beer.name}</li>
        `

        beer.forEach()
        beerUl.append(beerLi)
        
        const beerObj = {
            

        }
        const div = document.querySelector('div')
        beerLi.append(div)
        div.classname = "beer-detail"
        div.innerHTML = `
        <img src="<${beer.image_url}>"
        <h3>${beer.tagline}</h3>
        <p>${beer.description}</p>
        `
    }

    document.addEventListener('click', e =>{
        if (e.target.innerText === "${beer.name}")
        
        const beerObj
        fetch (beer_URL,)

    })


 getBeer()

})