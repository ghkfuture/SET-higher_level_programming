#!/usr/bin/node
const request = require('request');

const url = `https://swapi-api.alx-tools.com/api/films/${process.argv[2]}`;

request.get(url, (err, response, body) => {
  if (err) {
    console.log(err);
  } else {
    const film = JSON.parse(body);
    for (const characterUrl of film.characters) {
      request.get(characterUrl, (charErr, charRes, charBody) => {
        if (charErr) {
          console.log(charErr);
        } else {
          console.log(JSON.parse(charBody).name);
        }
      });
    }
  }
});
