const connection = require('../database');
const bcrypt = require('bcrypt');

const addPoli = async (req, res) => {
    try {
        const { rfc, role, name } = req.body;

        // Encriptar la contraseña usando bcrypt
        const saltRounds = 10;
        const hashedRFC = await bcrypt.hash(rfc, saltRounds);

        // Ejecutar la consulta para insertar un nuevo usuario
        const query = `INSERT INTO policias (RFC, Nombre, Categoria) VALUES (?, ?, ?)`;
        const values = [hashedRFC,name, role];

        const [result] = await connection.execute(query, values);

        res.status(201).json({ message: 'Policia agregado con exito', userId: result.insertId });
    } catch (error) {
        res.status(500).json({ message: 'Error al agregar', error });
    }
};

module.exports = {
    addPoli,
    // ... otros controladores
};
