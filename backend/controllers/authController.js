const db = require('../database');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt'); // Importa bcrypt

const secretKey = 'KKMJPKJAY'; // Reemplaza esto con una clave secreta segura

const login = async (req, res) => {
    const { usuario, contrasena } = req.body;
    console.log('Datos recibidos en el backend:', { usuario, contrasena });

    try {
        const [rows] = await db.query('SELECT * FROM users WHERE usuario = ?', [usuario]);
        const user = rows[0];
        console.log('Usuario encontrado en la base de datos:', user);

        if (user && await bcrypt.compare(contrasena, user.contrasena)) { // Compara la contraseña encriptada
            const { id_cargo, nombre } = user;

            // Genera un token JWT
            const token = jwt.sign({ id_cargo, nombre }, secretKey, { expiresIn: '1h' });

            let message = '';
            if (id_cargo === 1) {
                message = `Hola administrador, ${nombre}`;
            } else if (id_cargo === 2) {
                message = `Hola policia, ${nombre}`;
            }

            return res.status(200).json({ message, role: id_cargo, token });
        } else {
            console.log('Usuario o contraseña incorrectos');
            return res.status(401).json({ message: 'Usuario o contraseña incorrectos' });
        }
    } catch (error) {
        console.error('Error en el controlador de autenticación:', error);
        return res.status(500).json({ message: 'Error en el servidor', error });
    }
};

module.exports = { login };
