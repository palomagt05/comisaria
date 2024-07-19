// controllers/casoController.js

const pool = require('../database');
const bcrypt = require('bcrypt');

const registerCase = async (req, res) => {
    const { Codigo_Caso, CURP_Delincuente, Juzgado } = req.body;

    if (!Codigo_Caso || !CURP_Delincuente || !Juzgado) {
        return res.status(400).json({ message: 'El Código del Caso, el CURP del delincuente y el Juzgado son requeridos' });
    }

    try {
        // Buscar el CURP encriptado de los delincuentes en la base de datos
        const findDelincuenteQuery =  'SELECT CURP FROM delincuentes';
        const [delincuentes] = await pool.query(findDelincuenteQuery);

        // Verificar si algún CURP encriptado coincide con el CURP proporcionado
        let delincuenteFound = false;
        let delincuenteCURP;

        for (const delincuente of delincuentes) {
            const match = await bcrypt.compare(CURP_Delincuente, delincuente.CURP);
            if (match) {
                delincuenteFound = true;
                delincuenteCURP = delincuente.CURP;
                break;
            }
        }

        if (!delincuenteFound) {
            return res.status(404).json({ message: 'Delincuente no encontrado' });
        }

        // Registrar el caso en la base de datos usando el CURP encriptado
        const result = await pool.query('INSERT INTO caso_delincuente (Codigo_Caso, CURP_Delincuente, Juzgado) VALUES (?, ?, ?)', [Codigo_Caso, delincuenteCURP, Juzgado]);
        return res.status(201).json({ message: 'Caso registrado exitosamente', result });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error al registrar el caso', error });
    }
};

module.exports = {
    registerCase,
};
