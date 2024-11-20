// models/proyecto.js
const conn = require("../database/database");

class Proyecto {
  async listarProyectos() {
    const [rows] = await conn.query("SELECT * FROM proyectos");
    return rows;
  }

  async agregarProyecto(data) {
    const { nombre, apellido } = data;
    const [result] = await conn.query(
      "INSERT INTO proyectos (nombre, apellido) VALUES (?, ?)",
      [nombre, apellido]
    );
    return { id: result.insertId, ...data };
  }
}

module.exports = Proyecto;