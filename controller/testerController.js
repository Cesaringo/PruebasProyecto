const Tester = require("../models/tester");
const tester = new Tester();

exports.listarTesters = async (req, res) => {
  try {
    const testers = await tester.listarTesters();
    res.json(testers);
  } catch (error) {
    res.status(500).json({ error: "Error al listar testers" });
  }
};