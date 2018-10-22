const express = require('express');
const server = express();
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000;

server.use(bodyParser());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.get('/', (request, response) => { response.status(200).json({ hello: 'BookIt!' }) } )

server.listen(port, () => console.info(`BookIt is listening on port ${port}`))


