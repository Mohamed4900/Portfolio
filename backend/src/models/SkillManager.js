const AbstractManager = require("./AbstractManager");

class ProjectManager extends AbstractManager {
  constructor() {
    super({ table: "skill" });
  }

  insert(skill) {
    return this.database.query(
      `INSERT INTO ${this.table} (title, skill) VALUES (?, ?)`,
      [skill.title, skill.skill]
    );
  }

  update(skill) {
    return this.database.query(
      `UPDATE ${this.table} SET title = ?, skill = ? WHERE id = ?`,
      [skill.title, skill.skill, skill.id]
    );
  }
}

module.exports = ProjectManager;
