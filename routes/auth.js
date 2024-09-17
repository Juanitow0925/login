const express = require('express');
const router = express.Router();
const connection = require('../config/db');

// Ruta para el inicio de sesión
router.post('/login', (req, res) => {
    const { Usuario, Contraseña } = req.body;

    if (!Usuario || !Contraseña) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
    }

    const query = 'SELECT * FROM Usuario WHERE Usuario = ? AND Contraseña = ?';
    connection.query(query, [Usuario, Contraseña], (err, results) => {
        if (err) {
            console.error('Error al consultar la base de datos:', err);
            return res.status(500).json({ error: 'Error en el servidor.' });
        }

        if (results.length > 0) {
            // Si hay coincidencia
            const user = results[0];
            res.json({
                status: 'success',
                message: 'Inicio de sesión exitoso.',
                role: user.TipoRol // Incluye el rol en la respuesta
            });
        } else {
            // Si no hay coincidencia
            res.status(401).json({ error: 'Credenciales incorrectas.' });
        }
    });
});

module.exports = router;
