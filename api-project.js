const baseURL = 'https://pokeapi.co/api/v2/ability/{id or name}/';
let url;

const searchTerm = document.querySelector('.search'); // Pulling a specific class name from the HTML, and assigning it to a variable.
const name = document.querySelector('.name');
const generation = document.querySelector('.generation');
const effect = document.querySelector('effect');