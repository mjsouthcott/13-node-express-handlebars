// Import dependencies
const mysql = require("mysql2");
require("dotenv").config();

const defaultConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
}

// Create database connection
let connection = mysql.createConnection(defaultConfig);

// Export database connection
module.exports = connection.promise();