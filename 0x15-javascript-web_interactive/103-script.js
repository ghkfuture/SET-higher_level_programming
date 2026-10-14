#!/usr/bin/node
document.addEventListener('DOMContentLoaded', () => {
  const translateAction = async () => {
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
  };

  document.querySelector('#btn_translate').addEventListener('click', translateAction);

  document.querySelector('#language_code').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      translateAction();
    }
  });
});
