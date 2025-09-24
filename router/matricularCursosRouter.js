const express = require('express');
const router = express.Router();
const CursosMatriculados = require('../controller/cursoMatriculadoController');

router.get("/matriculas", CursosMatriculados.listar_matriculas);
router.post("/matriculas", CursosMatriculados.crear_matricula);
router.delete("/matriculas/:id", CursosMatriculados.eliminar_matricula);
router.put("/matriculas/:id", CursosMatriculados.actualizar_matricula);

module.exports = router;