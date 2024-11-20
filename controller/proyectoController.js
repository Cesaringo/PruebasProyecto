// controllers/proyectoController.js
const Proyecto = require("../models/proyecto");
const proyecto = new Proyecto();
exports.listarProyectos = async (req, res) => {
  try {
    const proyectos = await proyecto.listarProyectos();
    res.json(proyectos);
  } catch (error) {
    res.status(500).json({ error: "Error al listar proyectos" });
  }
};