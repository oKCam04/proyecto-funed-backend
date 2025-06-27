const express = require('express');
const MatriculaController = require('../controller/matriculaController');
const router = express.Router();

router.get('/', MatriculaController.listarMatricula);
router.post('/', MatriculaController.crearMatricula);
router.put('/:id', MatriculaController.actualizarMatricula);
router.delete('/:id', MatriculaController.eliminarMatricula);

module.exports = router; 