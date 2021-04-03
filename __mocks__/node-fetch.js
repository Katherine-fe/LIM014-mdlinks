const nodeFetch = jest.requireActual('node-fetch');
const fetchMock = require('fetch-mock').sandbox();

Object.assign(fetchMock.config, {
  fetch: nodeFetch,
});
fetchMock
  .mock('https://nodejs.org/es/about/', 200)
  .mock('https://www.youtube.com/watchtt', 404)
  .mock('https://www.youtube.com/watch?v=lPPgY3HLlhQ&t=916s', 200)
  .mock('https://carlosazaustre.com/manejando-la-asincronia-en-javascript/', { status: 'no status' })
  .mock('httpas://nodejs.org/es/abouts/', { status: 'no status' });
module.exports = fetchMock;
