const express = require('express');
const CortosController = require('../controller/cortosController');
const router = express.Router();

router.get('/', CortosController.listarCortos);
router.post('/', CortosController.crearCorto);
router.put('/:id', CortosController.actualizarCorto);
router.delete('/:id', CortosController.eliminarCorto);

module.exports = router; 