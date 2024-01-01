import mysql from 'mysql2/promise';

const videogamelibrary = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'rahasia',
  database: 'library'
});

export default videogamelibrary;