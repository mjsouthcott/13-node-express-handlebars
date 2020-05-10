// Import dependencies
const mysql = require("mysql2");
require("dotenv").config();

let defaultConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
}

// Use Heroku database config if it exists
if (process.env.JAWSDB_URL) defaultConfig = process.env.JAWSDB_URL;

// Create database connection
let connection = mysql.createConnection(defaultConfig);

// Export database connection
module.exports = connection.promise();