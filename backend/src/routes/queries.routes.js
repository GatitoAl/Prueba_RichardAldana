const express = require('express');
const router = express.Router();
const queriesController = require('../controllers/queries.controller');

// Ruta para las consultas
router.post('/all', queriesController.ids);

router.post('/register', queriesController.registerTransaction);

router.post('/id', queriesController.id);

module.exports = router;