onst config = require('./config');
const { Client, Enums } = require('fnbr');
const { readFile, writeFile } = require('fs').promises;

async function getCosmetic(name, backend) {
  const url = 'https://fortnite-api.com/v2/cosmetics/br/search' +
  `?name=${name}` +
  `&backendType=${backend}` +
  `&matchMethod=contains`;

  return (await fetch(url)).json();
}
