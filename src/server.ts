// Server dependencies
const express     = require('express');
const server      = express();
const bodyParser  = require('body-parser')
const port        = process.env.PORT || 3001;
const environment =  require('../.env');
environment.setup();

// Database dependencies and setup
const mysql      = require('mysql2');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'jude',
  password : process.env.DATABASE_PASSWORD,
  database : 'menagerie'
});

connection.connect();

server.use(bodyParser());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.get('/', (request, response) => { response.status(200).json({ hello: 'BookIt!' }) } )

server.listen(port, () => console.info(`BookIt is listening on port ${port}`))

process.on('SIGTERM', () => { 
  console.log('\nClosing server...');
  connection.end();
  process.exit();
})
process.on('SIGINT', () => { 
  console.log("\nClosing server...");
  connection.end();
  process.exit();
})


