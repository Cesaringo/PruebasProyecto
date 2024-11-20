const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;

// Importar rutas
const proyectoRoutes = require("./routes/proyectoRoutes");
const pruebasRoutes = require("./routes/pruebasRoutes");
const testerRoutes = require("./routes/testerRoutes");

// Middleware
app.use(express.json());

// Rutas
app.use("/api/proyectos", proyectoRoutes);
app.use("/api/pruebas", pruebasRoutes);
app.use("/api/testers", testerRoutes);

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
  });
