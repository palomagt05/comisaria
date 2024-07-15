const express = require('express');
const router = express.Router();
const delincuenteController = require('../controllers/delincuenteController');

// ... otras rutas

// Ruta para agregar usuarios
router.post('/delincuente/add', delincuenteController.addDelincuente);

module.exports = router;
