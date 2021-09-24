let baseURL = 'https://pokeapi.co/api';
console.log(baseURL)

let quoteContainer = document.querySelector('.quoteContainer');
let gen = document.querySelector('.Generation'); // Pulling a specific class name from the HTML, and assigning it to a variable.
let nme = document.querySelector('.Name');
let eft = document.querySelector('.Effect');
let btn = document.getElementById("Button");

// Fetch
async function apiFetch() {
    const response = await fetch(baseURL);
    const json = await response.json();
    apiResults(json);
}

// Display
const displayPokemon = (data) => {
    gen.innerHTML = data.generation;
    name.innerHTML = data.name;
    eft.innerHTML = data.effect;
    console.log(json)
}

// Button event
butn.addEventListener('click', (e) => {
    e.preventDefault();
})

console.log(data)

// Randomizer
async function fetchPokemon() {
    const randNum = Math.floor(Math.random() * (151-2) + 2)
    const response = await fetch (`$baseURL${randNum}`);
    console.log(response);
    const json = await response.json();
    displayPokemon(json)
    console.log(json)
}

// waiting for id and name as it is a sample in the url
// async/await or fetch like I did on repl 3 
// 1. data to be console log
// 2. then ready for display function which puts stuff on my page.
// First thing is identify what I want to do with the api
// <span id=pweight"></span>

// Const can be used once and will always be
// Let is flexible

// Ben's fix
//btn.addEventListener('click', apiFetch)
// evoking is when you make it directly run