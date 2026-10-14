#!/usr/bin/node
document.addEventListener('DOMContentLoaded', () => {
  const items = ['Item'];

  const render = () => {
    const ul = document.querySelector('ul.my_list');
    ul.innerHTML = '';
    for (const itemText of items) {
      const li = document.createElement('li');
      li.textContent = itemText;
      ul.appendChild(li);
    }
  };

  document.querySelector('#add_item').addEventListener('click', () => {
    items.push('Item');
    render();
  });

  document.querySelector('#remove_item').addEventListener('click', () => {
    if (items.length > 0) {
      items.pop();
      render();
    }
  });

  document.querySelector('#clear_list').addEventListener('click', () => {
    items.length = 0;
    render();
  });
});
