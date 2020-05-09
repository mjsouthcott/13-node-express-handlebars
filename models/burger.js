const orm = require("../config/orm");

class Burger {
  constructor ({ burger_name, devoured = 0 }) {
    this.burger_name = burger_name;
    this.devoured = devoured;
  }

  // Define selectBurgers method
  static async selectBurgers () {
    orm.selectAll();
  }

  // Define insertBurger method
  async insertBurger () {
    orm.insertOne(this.burger_name, this.devoured);
  }

  // Define updateBurger method
  async updateBurger () {
    orm.updateOne(this.burger_name);
  }
}

module.exports = Burger;