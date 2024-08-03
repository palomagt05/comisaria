const pool = require('../database');
const bcrypt = require('bcrypt');

const insertarJefe = async (req, res) => {
    const { rfcJefe, rfcSubordinado } = req.body;

    if (!rfcJefe || !rfcSubordinado) {
        return res.status(400).json({ message: 'El RFC del jefe y el RFC del subordinado son requeridos' });
    }

    try {
        // Buscar los RFCs encriptados de los policías en la base de datos
        const findPoliciasQuery = 'SELECT RFC FROM policias';
        const [policias] = await pool.query(findPoliciasQuery);

        // Verificar si algún RFC encriptado coincide con el RFC proporcionado
        let jefeFound = false;
        let subordinadoFound = false;
        let rfcEncriptadoJefe;
        let rfcEncriptadoSubordinado;

        for (const policia of policias) {
            const matchJefe = await bcrypt.compare(rfcJefe, policia.RFC);
            const matchSubordinado = await bcrypt.compare(rfcSubordinado, policia.RFC);

            if (matchJefe) {
                jefeFound = true;
                rfcEncriptadoJefe = policia.RFC;
            }

            if (matchSubordinado) {
                subordinadoFound = true;
                rfcEncriptadoSubordinado = policia.RFC;
            }

            if (jefeFound && subordinadoFound) {
                break;
            }
        }

        if (!jefeFound) {
            return res.status(404).json({ message: 'Jefe no encontrado' });
        }

        if (!subordinadoFound) {
            return res.status(404).json({ message: 'Subordinado no encontrado' });
        }

        // Insertar la información en la tabla jefes usando los RFCs encriptados
        const result = await pool.query('INSERT INTO jefes (RFC_Jefe, RFC_Subordinado) VALUES (?, ?)', [rfcEncriptadoJefe, rfcEncriptadoSubordinado]);
        return res.status(201).json({ message: 'Relación de jefe y subordinado insertada exitosamente', result });
    } catch (error) {
        console.error('Error al insertar relación de jefe y subordinado:', error);
        return res.status(500).json({ message: 'Error al insertar relación de jefe y subordinado', error });
    }
};

module.exports = {
    insertarJefe,
};
