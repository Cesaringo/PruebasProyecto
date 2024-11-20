const conn = require("../database/database");

class Prueba {
    async listarPruebas() {
      const [rows] = await conn.query("SELECT * FROM pruebas");
      return rows;
    }

    async agregarPrueba(data) {
        const { fecha_final, id_proyecto, id_tester } = data;
        const [result] = await conn.query(
          "INSERT INTO pruebas (fecha_final, id_proyecto, id_tester) VALUES (?, ?, ?)",
          [fecha_final, id_proyecto, id_tester]
        );
        return { id: result.insertId, ...data };
      }
    
      async pruebasPorTester() {
        const [rows] = await conn.query(`
          SELECT 
            testers.nombre, testers.apellido, COUNT(pruebas.id_pruebas) AS total_pruebas
          FROM testers
          LEFT JOIN pruebas ON testers.id_tester = pruebas.id_tester
          GROUP BY testers.id_tester
        `);
        return rows;
      }
    }
    
    module.exports = Prueba;