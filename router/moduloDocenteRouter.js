const express = require('express');
const router = express.Router();
const ModuloDocenteController = require('../controller/moduloDocenteController');

// Obtener asignaciones módulo-docente por oferta de curso
router.get('/modulo-docente/oferta/:id_oferta_curso', ModuloDocenteController.obtenerPorOfertaCurso);

module.exports = router;