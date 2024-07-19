const pool = require('../database');
const bcrypt = require('bcrypt');

const assignDelincuenteToCalabozo = async (req, res) => {
    const { CURP_Delincuente, Codigo_Calabozo } = req.body;

    if (!CURP_Delincuente || !Codigo_Calabozo) {
        return res.status(400).json({ message: 'El CURP del delincuente y el código del calabozo son requeridos' });
    }

    try {
        // Buscar el CURP encriptado del delincuente
        const findDelincuenteQuery = 'SELECT CURP FROM delincuentes';
        const [delincuentes] = await pool.query(findDelincuenteQuery);

        // Verificar si algún CURP desencriptado coincide con el CURP proporcionado
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

        // Asignar el delincuente al calabozo usando el CURP encriptado
        const result = await pool.query('INSERT INTO delincuente_calabozo (CURP_Delincuente, Codigo_Calabozo) VALUES (?, ?)', [delincuenteCURP, Codigo_Calabozo]);
        return res.status(201).json({ message: 'Delincuente asignado al calabozo exitosamente', result });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error al asignar el delincuente al calabozo', error });
    }
};

module.exports = {
    assignDelincuenteToCalabozo,
};
