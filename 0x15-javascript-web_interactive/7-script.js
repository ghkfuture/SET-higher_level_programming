#!/usr/bin/node
async function fetchCharacter () {
  try {
    const response = await fetch('https://swapi-api.alx-tools.com/api/people/5/?format=json');
    if (!response.ok) {
      throw new Error('Failed to fetch character');
    }
    const data = await response.json();
    document.querySelector('#character').textContent = data.name;
  } catch (error) {
    document.querySelector('#character').textContent = 'Error loading character';
  }
}
fetchCharacter();
