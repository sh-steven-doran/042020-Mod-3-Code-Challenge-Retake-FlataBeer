document.addEventListener('DOMContentLoaded', function(e){
    const beerUrl = 'http://localhost:3000/beers' 
    const beerRow = document.querySelector('.row')

    const fetchBeers = () => {
        fetch(beerUrl)
        .then(resp => resp.json())
        .then(beers => {
            renderBeers(beers)
        })
    }
    const renderBeers = beers => {
        beers.forEach(beerObj => {
            renderBeer(beerObj)
        })
    }

    const renderBeer = beerObj => {
        beerUl = document.createElement('ul')
        beerLi = document.createElement('li')
        beerUl.className = 'list-group'
        beerLi.className = 'list-group-item'
        beerLi.dataset.id = beerObj.id
        beerUl.innerHTML = `<ul class="list-group">
        <li class="list-group-item">${beerObj.id}</li>
        <li class="list-group-item">${beerObj.id}</li>
        /* etc... */
      </ul>`

      const ul = beerUl.append(beerli)
      beerRow.append(ul)
    }
    beerRow.addEventListener('')
    // make get request to http://localhost:3000/beers
    //


})



