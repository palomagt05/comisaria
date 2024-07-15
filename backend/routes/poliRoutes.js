const express = require('express');
const router = express.Router();
const addPoliController = require('../controllers/poliController');

// ... otras rutas

// Ruta para agregar usuarios
router.post('/poli/add', addPoliController.addPoli);

module.exports = router;
