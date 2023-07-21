const AbstractManager = require("./AbstractManager");

class HobbieManager extends AbstractManager {
  constructor() {
    super({ table: "hobbie" });
  }

  insert(hobbie) {
    return this.database.query(
      `INSERT INTO ${this.table} (title, hobbie) VALUES (?, ?)`,
      [hobbie.title, hobbie.hobbie]
    );
  }

  update(hobbie) {
    return this.database.query(
      `UPDATE ${this.table} SET title = ?, hobbie = ? WHERE id = ?`,
      [hobbie.title, hobbie.hobbie, hobbie.id]
    );
  }
}

module.exports = HobbieManager;
