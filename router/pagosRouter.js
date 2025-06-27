const express = require('express');
const PagosController = require('../controller/pagosController');
const router = express.Router();

router.get('/', PagosController.listarPagos);
router.post('/', PagosController.crearPago);
router.put('/:id', PagosController.actualizarPago);
router.delete('/:id', PagosController.eliminarPago);

module.exports = router; 