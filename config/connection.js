// Import dependencies
const mysql = require("mysql2");
require("dotenv").config();

const defaultConfig = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
}

let connection;

// Create database connection
if (process.env.JAWSDB_URL) connection = mysql.createConnection(process.env.JAWSDB_URL);
else connection = mysql.createConnection(defaultConfig);

// Export database connection
module.exports = connection.promise();