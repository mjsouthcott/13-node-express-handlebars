// Import dependencies
const { selectAll, selectById, insertOne, updateOne } = require("../config/orm");

// Define Burger class
class Burger {
  constructor ({ burgerName, devoured = false }) {
    this.burgerName = burgerName;
    this.devoured = devoured;
  }

  // Define selectBurgers method
  static async selectAllBurgers () {
    return selectAll();
  }

  // Define selectBurgerById method
  static async selectBurgerById (id) {
    return selectById(id);
  }

  // Define insertBurger method
  async insertOneBurger () {
    return insertOne(this.burgerName);
  }

  // Define updateBurger method
  async updateOneBurger () {
    return updateOne(this.id);
  }
}

// Export Burger class
module.exports = Burger;