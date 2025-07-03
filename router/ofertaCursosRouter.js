const express = require('express');
const router = express.Router();
const ofertaCursosController = require('../controller/ofertaCursosController');

router.get("/ofertaCursos", ofertaCursosController.listarOfertasCursos);
router.post("/ofertaCursos", ofertaCursosController.crearOfertaCurso);
router.put("/ofertaCursos/:id", ofertaCursosController.actualizarOfertaCurso);
router.delete("/ofertaCursos/:id", ofertaCursosController.eliminarOfertaCurso);

module.exports = router;