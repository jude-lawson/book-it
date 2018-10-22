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
  database : process.env.DATABASE
});

console.log(process.env.DATABASE)
console.log(process.env.NODE_ENV)

connection.connect((error) => {
  if (error) {
    if (error.code === 'ER_BAD_DB_ERROR') {
      console.error('Error: ' + error.sqlMessage);
      console.info('You may need to create the database.');
      process.exit();
    }
  }
});

server.use(bodyParser());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

const helloDatabase = (request, response) => {
  connection.query('SELECT * FROM pets', (error, results, fields) => {
    if (error) throw error.sqlMessage;
    response.send(results);
  });
}

server.get('/', (request, response) => helloDatabase(request, response) )

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


