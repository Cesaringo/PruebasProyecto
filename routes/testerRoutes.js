const express = require("express");
const controller = require("../controller/testerController");
const router = express.Router();

router.get("/", controller.listarTesters);

module.exports = router;