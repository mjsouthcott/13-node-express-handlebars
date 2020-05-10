// Import dependencies
const { selectAll, insertOne, updateOne } = require("../config/orm");
const to = require('to-case');

// Define Burger class
class Burger {
  constructor ({ burgerName }) {
    this.burgerName = to.title(burgerName);
  }

  // Define selectBurgers method
  static async selectAllBurgers () {
    return await selectAll();
  }

  // Define insertBurger method
  async insertOneBurger () {
    return await insertOne(this.burgerName);
  }

  // Define updateBurger method
  static async updateOneBurger (id) {
    return await updateOne(id);
  }
}

// Export Burger class
module.exports = Burger;