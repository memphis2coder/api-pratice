// create a request variable and assign a new XMLHttpRequest object to it
let request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open("GET", "https://ghibliapi.herokuapp.com/vehicles");

request.onload = function() {
  //begin accessing JSON data here
  let data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    data.forEach(vehicles => {
      // crate a div with a card class
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      // create a h1 with a title of vehicle name
      const h1 = document.createElement("h1");
      h1.textContent = vehicles.name;

      // create a p and set text content to vehicle description
      const p = document.createElement("p");
      vehicles.description = vehicles.description.substring(0, 300);
      p.textContent = `${vehicles.description}...`;

      // append the cards to the container element
      container.appendChild(card);

      // each card with contain a h1 and p
      card.appendChild(h1);
      card.appendChild(p);

      // log each vehicle name
      console.log(vehicles.name);
      console.log(vehicles.description);
    });
  } else {
    console.log("error");
  }
};

// send request
request.send();

// DOM getting root id
const app = document.getElementById("root");

// create a new div and set class attribute
const container = document.createElement("div");
container.setAttribute("class", "container");

// append div to the app root
app.appendChild(container);
