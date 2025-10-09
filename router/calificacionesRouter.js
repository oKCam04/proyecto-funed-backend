const express = require('express');
const router = express.Router();
const CalificacionesController = require('../controller/calificacionesController');

// Rutas específicas primero
router.get('/notas-modulo/list', CalificacionesController.listarTodas);
router.get('/notas-modulo/id/:id', CalificacionesController.obtenerNotaPorId);
router.get('/notas-modulo/modulo/:id_modulo/oferta/:id_oferta_curso', CalificacionesController.listarNotasPorModuloOferta);

// CRUD
router.post('/notas-modulo', CalificacionesController.upsertNotaModulo);
router.patch('/notas-modulo/:id', CalificacionesController.actualizarNota);
router.patch('/notas-modulo', CalificacionesController.actualizarNota);
router.delete('/notas-modulo/:id', CalificacionesController.eliminarNota);

// Ruta existente por estudiante y oferta
router.get('/notas-modulo/:id_persona/:id_oferta_curso', CalificacionesController.obtenerNotasPorEstudianteOferta);

// GET /api/notas-modulo/:id
router.get('/notas-modulo/:id', CalificacionesController.obtenerPorId);

// POST upsert nota de módulo
router.post('/notas-modulo', CalificacionesController.upsertNotaModulo);

// PATCH actualizar nota por ID
router.patch('/notas-modulo/:id', CalificacionesController.actualizarNota);

// DELETE eliminar nota por ID
router.delete('/notas-modulo/:id', CalificacionesController.eliminarNota);

// GET listar notas por módulo y oferta
router.get('/notas-modulo/modulo/:id_modulo/oferta/:id_oferta_curso', CalificacionesController.listarPorModuloOferta);

// GET listado general de notas de módulo
router.get('/notas-modulo', CalificacionesController.listarTodas);

module.exports = router;