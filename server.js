const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Configuración de CORS
app.use(cors());

// Configuración de body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Rutas de la API
const authRoutes = require('./routes/auth');
app.use('/api', authRoutes);

// Manejo de rutas no encontradas (404)
app.use((req, res) => {
    res.status(404).send('<!DOCTYPE html><html><body><h1>Página no encontrada</h1></body></html>');
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
