const express = require('express');
const FinanciamientoController = require('../controller/financiamientoController');
const router = express.Router();

router.get('/', FinanciamientoController.listarFinanciamiento);
router.post('/', FinanciamientoController.crearFinanciamiento);
router.put('/:id', FinanciamientoController.actualizarFinanciamiento);
router.delete('/:id', FinanciamientoController.eliminarFinanciamiento);

module.exports = router; 