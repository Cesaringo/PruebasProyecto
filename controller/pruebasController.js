const Prueba = require("../models/pruebas");
const prueba = new Prueba();

exports.listarPruebas = async (req, res) => {
  try {
    const pruebas = await prueba.listarPruebas();
    res.json(pruebas);
  } catch (error) {
    res.status(500).json({ error: "Error al listar pruebas" });
  }
};

exports.pruebasPorTester = async (req, res) => {
  try {
    const resultados = await prueba.pruebasPorTester();
    res.json(resultados);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener pruebas por tester" });
  }
};