const beerDetail = document.querySelector('#beer-detail')
const beerList = document.querySelector('#beer-list')

{/* <h1>Beer Name</h1>
<img src="<add beer img url here>">
<h3>Beer Tagline</h3>
<p>Beer Description</p> */}

{/* <ul class="list-group">
  <li class="list-group-item">Beer title 1</li>
  <li class="list-group-item">Beer title 2</li>
</ul> */}

function addToList(beer){
    let li = document.createElement('li')
    li.className = 'list-group'
    li.id = 'beer-list'

    li.innerText = `${beer.name}`
    beerList.append(li)
}

beerList.addEventListener('click', )

function renderBeer(beer){

    let h1 = document.createElement('h1')
    h1.innerText = `${beer.name}`

    let img = document.createElement('img')
    img.src = `${beer.image_url}`

    let h3 = document.createElement('h3')
    h3.innerText = `${beer.tagline}`

    let p = document.createElement('p')
    p.innerText = `${beer.description}`

    beerDetail.append(h1, img, h3, p)
}

function iterateBeers(beers){
    //beers.forEach(renderBeer)
    beers.forEach(addToList)
}

fetch('http://localhost:3000/beers')
.then(res => res.json())
.then(beers => iterateBeers(beers))