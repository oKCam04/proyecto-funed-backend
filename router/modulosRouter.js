const express = require('express');
const ModulosController = require('../controller/modulosController');
const router = express.Router();

router.get('/', ModulosController.listarModulos);
router.post('/', ModulosController.crearModulo);
router.put('/:id', ModulosController.actualizarModulo);
router.delete('/:id', ModulosController.eliminarModulo);

module.exports = router; 