const express = require('express');
const TecnicosController = require('../controller/tecnicosController');
const router = express.Router();

router.get('/', TecnicosController.listarTecnicos);
router.post('/', TecnicosController.crearTecnico);
router.put('/:id', TecnicosController.actualizarTecnico);
router.delete('/:id', TecnicosController.eliminarTecnico);

module.exports = router; 