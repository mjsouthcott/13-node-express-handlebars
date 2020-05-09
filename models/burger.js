// Import dependencies
const { selectAll, insertOne, updateOne } = require("../config/orm");

// Define Burger class
class Burger {
  constructor ({ burgerName }) {
    this.burgerName = burgerName;
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