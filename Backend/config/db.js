const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root', // change if your MySQL username is different
  password: '', // change if you have a password
  database: 'wizdombridge'
});

module.exports = db;
