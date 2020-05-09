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
  insertOne: async (burgerName) => {
    const sql = "INSERT INTO burgers (`burger_name`) VALUES (?);";
    const [results] = await connection.query(sql, burgerName);
    return results;
  },

  // Define updateOne method
  updateOne: async (id) => {
    const sql = "UPDATE burgers SET `devoured` = true WHERE id = ?";
    const [results] = await connection.query(sql, parseInt(id));
    return results;
  }
}

// Export ORM object
module.exports = orm;