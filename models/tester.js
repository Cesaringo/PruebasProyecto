const conn = require("../database/database");

class Tester {
  async listarTesters() {
    const [rows] = await conn.query("SELECT * FROM testers");
    return rows;
  }

  async agregarTester(data) {
    const { nombre, apellido } = data;
    const [result] = await conn.query(
      "INSERT INTO testers (nombre, apellido) VALUES (?, ?)",
      [nombre, apellido]
    );
    return { id: result.insertId, ...data };
  }
}

module.exports = Tester;