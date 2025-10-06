const express = require('express');
const router = express.Router();
const CalificacionesController = require('../controller/calificacionesController');

// GET /api/calificaciones/oferta/:id_oferta_curso
router.get('/calificaciones/oferta/:id_oferta_curso', CalificacionesController.obtenerPorOferta);

module.exports = router;