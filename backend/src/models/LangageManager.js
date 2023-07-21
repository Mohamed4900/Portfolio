const AbstractManager = require("./AbstractManager");

class LangageManager extends AbstractManager {
  constructor() {
    super({ table: "langage" });
  }

  insert(langage) {
    return this.database.query(
      `INSERT INTO ${this.table} (title, langage) VALUES (?, ?)`,
      [langage.title, langage.langage]
    );
  }

  update(langage) {
    return this.database.query(
      `UPDATE ${this.table} SET title = ?, langage = ? WHERE id = ?`,
      [langage.title, langage.langage, langage.id]
    );
  }
}

module.exports = LangageManager;
