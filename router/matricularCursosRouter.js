const express = require('express');
const router = express.Router();
const CursosMatriculados = require('../controller/cursoMatriculadoController');

router.get("/matriculas", CursosMatriculados.listarMatriculas);
router.post("/matriculas", CursosMatriculados.crearMatricula);
router.delete("/matriculas/:id", CursosMatriculados);
router.put("/matriculas/:id", CursosMatriculados);
router.get("/cursosPersonas/:id", CursosMatriculados.cursoMatriculadoPersona)
router.get("/modulosPersona/:id_persona/:id_oferta_curso", CursosMatriculados.obtenerModuloPersona)

module.exports = router;