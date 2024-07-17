const connection = require('../database');
const bcrypt = require('bcrypt');

const addDelincuente = async (req, res) => {
    try {
        const { curp, name, tel, direccion } = req.body;

        // Verificar si el CURP ya existe
        const checkUserQuery = 'SELECT * FROM delincuentes WHERE CURP = ?';
        const [existingUser] = await connection.execute(checkUserQuery, [curp]);

        if (existingUser.length > 0) {
            return res.status(400).json({ message: 'El CURP ya está registrado' });
        }

        // Encriptar la CURP y dirección usando bcrypt
        const saltRounds = 10;
        const hashedCurp = await bcrypt.hash(curp, saltRounds);
        const hashedDireccion = await bcrypt.hash(direccion, saltRounds);

        // Ejecutar la consulta para insertar un nuevo delincuente
        const query = 'INSERT INTO delincuentes (CURP, Nombre, Telefono, Direccion) VALUES (?, ?, ?, ?)';
        const values = [hashedCurp, name, tel, hashedDireccion];

        const [result] = await connection.execute(query, values);

        res.status(201).json({ message: 'Delincuente agregado con éxito', userId: result.insertId });
    } catch (error) {
        res.status(500).json({ message: 'Error al agregar delincuente', error });
    }
};

module.exports = {
    addDelincuente,
};
