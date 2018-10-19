const express = require('express');
const server = express();
const port = 3000;

server.get('/', (request, response) => response.send('Hello BookIt!'))

server.listen(port, () => console.info(`BookIt is listening on port ${port}`))


