const express = require("express");
const controller = require("../controller/pruebasController");
const router = express.Router();

router.get("/", controller.listarPruebas);
router.get("/tester", controller.pruebasPorTester);

module.exports = router;