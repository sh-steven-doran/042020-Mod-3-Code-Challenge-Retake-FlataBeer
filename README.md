# Module 3 JS Code Challenge

## Objectives

- DOM Manipulation
- Events and Event Handlers
- Callbacks
- ES6 Classes
- Fetching from APIs

## Instructions

For this code challenge, you will be building a **[Master Detail Interface](Master-Detail.png)**

This is a very common pattern that you have definitely seen before. Often on the side of the screen, you will see a list of "all things" (think all Messages) that will contain some information about each message (sender and first few lines of message), but not all of the information that message contains.

By clicking one particular message on the master list, the application will show more information about that particular message.

#### Today, you will be building a Beer App 🍺🍺🍺

-- As a user, when the page loads, I should see a list of beer names retrieved from an API on the left hand side of the screen.

-- As a user, when I click a beer name, the application should reveal more information about that particular beer.

![beer gif](code-challenge-mod-iii-round-ii.gif)

## The API

Instead of actually accessing the data from a remote API, this challenge uses a package called [json-server](https://github.com/typicode/json-server) to create a fake API for development and testing.

It is very easy to set-up.

1 - Run the command `npm install -g json-server` in the command line from this directory

2 - Run  `json-server --watch db.json`

That's it. You will have a server running on `localhost:3000` that serves the JSON data contained in the `db.json` file.

*Troubleshooting: If this fails, be sure you don't already have something running on port 3000*

## Deliverables and How to Approach

For this challenge, it is important to work iteratively, one feature at a time, before moving on to the next. You should **prioritize making code that works over attempting all of the deliverables.**

### Step 1 - Display All Beer Names

When the page loads, I should see a list of all of the beer names retrieved from the API on the left hand side of the screen. The API endpoint we need to retrieve all the beers is a conventional RESTful route

* **Route:** GET `http://localhost:3000/beers`

#### Styling

[Bootstrap](https://getbootstrap.com/docs/3.3/components/#list-group) is loaded into this project via a link tag in the head of the html. Generally, do not worry about styling in this application.

**One important point** is that for the beer names to show up correctly, the html should have the following class names:

```html
<ul class="list-group">
  <li class="list-group-item">Beer title 1</li>
  <li class="list-group-item">Beer title 2</li>
  /* etc... */
</ul>
```

### Step 2 - Display Single Beer Details

When I click a beer name, the application should reveal more information about that particular beer.
See the example above for the additional information that should be displayed.

* **Route:** GET `http://localhost:3000/beers/:id`

The beer details should be added to this div

```html
<div id="beer-detail">

</div>
```
The html should look something like:

```html
<h1>Beer Name</h1>
<img src="<add beer img url here>">
<h3>Beer Tagline</h3>
<p>Beer Description</p>
```


## Considerations

You are free to solve this in any way you choose. It is not required that you have ES6 classes or use Object Orientation.

When you click on an individual `<li>` you will need some way of determining which particular beer was clicked on. How will you solve this problem?
