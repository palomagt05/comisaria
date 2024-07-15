const connection = require('../database');
const bcrypt = require('bcrypt');

const addDelincuente = async (req, res) => {
    try {
        const { curp,name, tel,direccion} = req.body;

        // Verificar si el nombre de usuario ya existe
        const checkUserQuery = 'SELECT * FROM delincuentes WHERE CURP = ?';
        const [existingUser] = await connection.execute(checkUserQuery, [curp]);

        if (existingUser.length > 0) {
            return res.status(400).json({ message: 'El Curp ya esta registrado' });
        }

        // Encriptar la contraseña usando bcrypt
        const saltRounds = 10;
        const hashedcurp = await bcrypt.hash(curp, saltRounds);
        const hashedireccion = await bcrypt.hash(direccion, saltRounds);

        // Ejecutar la consulta para insertar un nuevo usuario
        const query = `INSERT INTO delincuentes (CURP, Nombre, Telefono, Direccion) VALUES (?, ?, ?, ?)`;
        const values = [hashedcurp,tel,name,hashedireccion];

        const [result] = await connection.execute(query, values);

        res.status(201).json({ message: 'Delincuente agregado con exito', userId: result.insertId });
    } catch (error) {
        res.status(500).json({ message: 'Error al agregar usuario', error });
    }
};

module.exports = {
    addDelincuente,
};
