const express = require('express');
const router = express.Router();
const queriesController = require('../controllers/queries.controller');

// Ruta para las consultas
router.post('/all', queriesController.ids);

module.exports = router;