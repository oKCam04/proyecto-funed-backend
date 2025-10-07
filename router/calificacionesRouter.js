const express = require('express');
const router = express.Router();
const CalificacionesController = require('../controller/calificacionesController');

// GET /api/notas-modulo/:id_persona/:id_oferta_curso
router.get('/notas-modulo/:id_persona/:id_oferta_curso', CalificacionesController.obtenerNotasPorEstudianteOferta);

module.exports = router;