const express = require('express');
const router = express.Router();
const addController = require('../controllers/armaController');

// ... otras rutas

// Ruta para agregar usuarios
router.post('/arma/add', addController.addArma);

module.exports = router;
