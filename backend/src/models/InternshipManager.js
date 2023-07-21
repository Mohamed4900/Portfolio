const AbstractManager = require("./AbstractManager");

class InternshipManager extends AbstractManager {
  constructor() {
    super({ table: "internship" });
  }

  insert(internship) {
    return this.database.query(
      `INSERT INTO ${this.table} (title, date_internship, internship, website) VALUES (?, ?, ?, ?)`,
      [
        internship.title,
        internship.date_internship,
        internship.internship,
        internship.website,
      ]
    );
  }

  update(internship) {
    return this.database.query(
      `UPDATE ${this.table} SET title = ?, date_internship = ?, internship = ?, website = ? WHERE id = ?`,
      [
        internship.title,
        internship.date_internship,
        internship.internship,
        internship.website,
        internship.id,
      ]
    );
  }
}

module.exports = InternshipManager;
