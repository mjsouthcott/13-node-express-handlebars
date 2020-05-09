// Import dependencies
const connection = require("./connection");

// Define ORM object
const orm = {
  // Define selectAll method
  selectAll: async () => {
    const sql = "SELECT * FROM burgers;";
    const [rows] = await connection.query(sql);
    return rows;
  },

  // Define insertOne method
  insertOne: async (burgerName, isDevoured) => {
    const sql = "INSERT INTO burgers (burger_name, devoured) VALUES (?, ?);";
    const [results] = await connection.query(sql, [burgerName, isDevoured])
    return results;
  },

  // Define updateOne method
  updateOne: async (burger_name) => {
    const sql = "UPDATE burgers SET `devoured` = 1 WHERE burger_name = ?";
    const [results] = await connection.query(sql, burger_name)
    return results;
  }
}

// Export ORM object
module.exports = orm;