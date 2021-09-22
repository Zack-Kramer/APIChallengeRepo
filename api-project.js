const baseURL = 'https://pokeapi.co/api/v2/pokemon/ditto';
let quoteContainer = document.querySelector('.quoteContainer');

const searchTerm = document.querySelector('.search'); // Pulling a specific class name from the HTML, and assigning it to a variable.
const name = document.querySelector('.name');
const generation = document.querySelector('.generation');
const effect = document.querySelector('effect');

console.log(data)

// waiting for id and name as it is a sample in the url
// async/await or fetch like I did on repl 3 
// 1. data to be console log
// 2. then ready for display function which puts stuff on my page.