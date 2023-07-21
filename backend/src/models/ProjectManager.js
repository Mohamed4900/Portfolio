const AbstractManager = require("./AbstractManager");

class ProjectManager extends AbstractManager {
  constructor() {
    super({ table: "project" });
  }

  insert(project) {
    return this.database.query(
      `INSERT INTO ${this.table} (title, date_project, subjects, technologies, website) VALUES (?, ?, ?, ?, ?)`,
      [
        project.title,
        project.date_project,
        project.subjects,
        project.technologies,
        project.website,
      ]
    );
  }

  update(project) {
    return this.database.query(
      `UPDATE ${this.table} SET title = ?, date_project = ?, subjects = ?, technologies = ?, website = ? WHERE id = ?`,
      [
        project.title,
        project.date_project,
        project.subjects,
        project.technologies,
        project.website,
        project.id,
      ]
    );
  }
}

module.exports = ProjectManager;
