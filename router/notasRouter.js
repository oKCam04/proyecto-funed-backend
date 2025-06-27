const express = require('express');
const NotasController = require('../controller/notasController');
const router = express.Router();

router.get('/', NotasController.listarNotas);
router.post('/', NotasController.crearNota);
router.put('/:id', NotasController.actualizarNota);
router.delete('/:id', NotasController.eliminarNota);

module.exports = router; 