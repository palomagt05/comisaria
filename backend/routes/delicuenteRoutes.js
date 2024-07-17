const express = require('express');
const router = express.Router();
const delincuenteController = require('../controllers/delincuenteController');

router.post('/delincuente/add', delincuenteController.addDelincuente);

module.exports = router;
