// Import dependencies
const connection = require("./connection");

// Define orm object
const orm = {
  // Define selectAll() method
  selectAll: async () => {
    const sql = "SELECT * FROM burgers;";
    const [rows] = await connection.query(sql);
    return rows;
  },

  // Define insertOne() method
  insertOne: async (burgerName, isDevoured) => {
    const sql = "INSERT INTO burgers (burger_name, devoured) VALUES (?, ?);";
    const [rows] = await connection.query(sql, [burgerName, isDevoured])
    return rows;
  },

  // Define updateOne() method
  updateOne: async (burger_name) => {
    const sql = "UPDATE burgers SET `devoured` = 1 WHERE burger_name = ?";
    const [rows] = await connection.query(sql, burger_name)
    return rows;
  }
}

// Export ORM
module.exports = orm;