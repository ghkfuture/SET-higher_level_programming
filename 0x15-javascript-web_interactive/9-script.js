#!/usr/bin/node
document.addEventListener('DOMContentLoaded', async () => {
  try {
    const response = await fetch('https://hellosalut.stefanbohacek.dev/?lang=fr');
    if (!response.ok) {
      throw new Error('Failed to fetch translation');
    }
    const data = await response.json();
    document.querySelector('#hello').textContent = data.hello;
  } catch (error) {
    document.querySelector('#hello').textContent = 'Error loading translation';
  }
});
