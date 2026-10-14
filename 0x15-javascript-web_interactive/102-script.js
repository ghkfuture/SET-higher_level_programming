#!/usr/bin/node
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#btn_translate').addEventListener('click', async () => {
    const langCode = document.querySelector('#language_code').value;
    if (!langCode) return;
    try {
      const response = await fetch(`https://hellosalut.stefanbohacek.dev/?lang=${langCode}`);
      if (!response.ok) {
        throw new Error('Failed to fetch translation');
      }
      const data = await response.json();
      document.querySelector('#hello').textContent = data.hello;
    } catch (error) {
      document.querySelector('#hello').textContent = 'Error loading translation';
    }
  });
});
