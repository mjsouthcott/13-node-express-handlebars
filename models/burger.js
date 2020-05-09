// Import dependencies
const orm = require("../config/orm");

// Define Burger class
class Burger {
  constructor ({ burger_name, devoured = 0 }) {
    this.burger_name = burger_name;
    this.devoured = devoured;
  }

  // Define selectBurgers method
  static async selectBurgers () {
    return orm.selectAll();
  }

  // Define insertBurger method
  async insertBurger () {
    return orm.insertOne(this.burger_name, this.devoured);
  }

  // Define updateBurger method
  async updateBurger () {
    return orm.updateOne(this.burger_name);
  }
}

// Export Burger class
module.exports = Burger;