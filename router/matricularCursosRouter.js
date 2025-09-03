const express = require('express');
const router = express.Router();
const CursosMatriculados = require('../controller/cursoMatriculadoController');

router.get("/matriculas", CursosMatriculados.listarMatriculas);
router.post("/matriculas", CursosMatriculados.crearMatricula);
router.delete("/matriculas/:id", CursosMatriculados);
router.put("/matriculas/:id", CursosMatriculados);

module.exports = router;