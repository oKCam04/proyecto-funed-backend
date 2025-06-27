const express = require('express');
const HorariosController = require('../controller/horariosController');
const router = express.Router();

router.get('/', HorariosController.listarHorarios);
router.post('/', HorariosController.crearHorario);
router.put('/:id', HorariosController.actualizarHorario);
router.delete('/:id', HorariosController.eliminarHorario);

module.exports = router; 