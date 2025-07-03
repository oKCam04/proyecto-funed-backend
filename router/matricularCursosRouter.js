const express = require('express');
const router = express.Router();
const matricularCursoController = require('../controller/matricularCursoController');

router.get("/matriculas", matricularCursoController.listarMatriculas);
router.post("/matriculas", matricularCursoController.crearMatricula);
router.delete("/matriculas/:id", matricularCursoController.eliminarMatricula);
router.put("/matriculas/:id", matricularCursoController.actualizarMatricula);

module.exports = router;