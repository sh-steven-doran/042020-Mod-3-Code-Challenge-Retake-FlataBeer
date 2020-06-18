document.addEventListener("DOMContentLoaded", (e) =>{

    const base_URL = "http://localhost:3000/beers"
    const beer_URL = "http://localhost:3000/beers/:id"

    const getBeer = () => {
        fetch(base_URL)
        .then(resp => resp.json())
        .then(json => {renderBeers(beers)
        })
    }

    const renderBeers = (beers) => {
        beers.forEach(beer => {
            renderBeers(beer)
        })
        console.log(renderBeers(beer))
    }






 getBeer()

})