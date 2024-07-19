const pool = require('../database');
const bcrypt = require('bcrypt');

const insertarInvestigacion = async (req, res) => {
    const { rfcPolicia, codigoCaso } = req.body;

    if (!rfcPolicia || !codigoCaso) {
        return res.status(400).json({ message: 'El RFC del policía y el Código del Caso son requeridos' });
    }

    try {
        // Buscar el RFC encriptado de los policías en la base de datos
        const findPoliciaQuery = 'SELECT RFC FROM policias';
        const [policias] = await pool.query(findPoliciaQuery);

        // Verificar si algún RFC encriptado coincide con el RFC proporcionado
        let policiaFound = false;
        let rfcEncriptado;

        for (const policia of policias) {
            const match = await bcrypt.compare(rfcPolicia, policia.RFC);
            if (match) {
                policiaFound = true;
                rfcEncriptado = policia.RFC;
                break;
            }
        }

        if (!policiaFound) {
            return res.status(404).json({ message: 'Policía no encontrado' });
        }

        // Insertar la información en la tabla investigacion usando el RFC encriptado
        const result = await pool.query('INSERT INTO investigacion (RFC_Policia, Codigo_Caso) VALUES (?, ?)', [rfcEncriptado, codigoCaso]);
        return res.status(201).json({ message: 'Investigación insertada exitosamente', result });
    } catch (error) {
        console.error('Error al insertar investigación:', error);
        return res.status(500).json({ message: 'Error al insertar investigación', error });
    }
};

module.exports = {
    insertarInvestigacion,
};
