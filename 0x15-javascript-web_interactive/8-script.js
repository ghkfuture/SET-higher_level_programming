#!/usr/bin/node
async function fetchMovies () {
  try {
    const response = await fetch('https://swapi-api.alx-tools.com/api/films/?format=json');
    if (!response.ok) {
      throw new Error('Failed to fetch movies');
    }
    const data = await response.json();
    const list = document.querySelector('#list_movies');
    for (const film of data.results) {
      const li = document.createElement('li');
      li.textContent = film.title;
      list.appendChild(li);
    }
  } catch (error) {
    const list = document.querySelector('#list_movies');
    const li = document.createElement('li');
    li.textContent = 'Error loading movies';
    list.appendChild(li);
  }
}
fetchMovies();
