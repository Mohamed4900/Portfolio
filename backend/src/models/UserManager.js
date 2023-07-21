const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  find(id) {
    return this.database.query(
      `select email from  ${this.table} where id = ?`,
      [id]
    );
  }

  findByEmailWithHashedPassword(email) {
    return this.database.query(
      `select id, email, hashedPassword, is_admin from  ${this.table} where email = ?`,
      [email]
    );
  }

  findAll() {
    return this.database.query(`select email from  ${this.table}`);
  }

  insert(user) {
    return this.database.query(
      `insert into ${this.table} (firstname, lastname, email, hashedPassword, is_admin) values (?, ?, ?, ?, ?)`,
      [
        user.firstName,
        user.lastName,
        user.email,
        user.hashedPassword,
        user.is_admin,
      ]
    );
  }

  update(user) {
    return this.database.query(
      `update ${this.table} set firstname = ?, lastname = ?, email = ?, hashedPassword = ?, is_admin = ? where id = ?`,
      [
        user.firstName,
        user.lastName,
        user.email,
        user.hashedPassword,
        user.is_admin,
        user.id,
      ]
    );
  }
}

module.exports = UserManager;
