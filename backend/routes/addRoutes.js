const express = require('express');
const router = express.Router();
const addController = require('../controllers/addController');

// ... otras rutas

// Ruta para agregar usuarios
router.post('/users/add', addController.addUser);

module.exports = router;
