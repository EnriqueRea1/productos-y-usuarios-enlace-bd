const express = require("express");
const app = express();
const path = require("path");
const usuarioRutas = require("./routes/usuariosRutas");

// Servir archivos estáticos
app.use("/", express.static(path.join(__dirname, "web")));

// Configurar el motor de plantillas
app.set("view engine", "ejs");

// Middleware para analizar los cuerpos de las solicitudes URL-encoded
app.use(express.urlencoded({ extended: true }));

// Usar las rutas definidas en usuarioRutas
app.use("/", usuarioRutas);

// Configurar el puerto
const port = process.env.PORT || 3000;

// Iniciar el servidor
app.listen(port, () => {
    console.log("Sitio en http://localhost:" + port);
});
