const mysql = require('mysql');

// Crear la conexión a la base de datos
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Cambia esto si es necesario
    password: '', // Cambia esto si es necesario
    database: 'prueba'
});

// Conectar a la base de datos
connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conexión a la base de datos establecida.');
});

module.exports = connection;
