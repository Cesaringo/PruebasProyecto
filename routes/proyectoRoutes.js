const express = require("express");
const controller = require("../controller/proyectoController");
const router = express.Router();

router.get("/", controller.listarProyectos);

module.exports = router;