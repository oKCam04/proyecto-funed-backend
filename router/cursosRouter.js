const express = require('express');
const router = express.Router();
const cursosRouter=require('../controller/cursosController');

router.get("/cursos", cursosRouter.listarCursos);
router.post("/cursos", cursosRouter.crearCurso);
router.put("/cursos/:id", cursosRouter.actualizarCurso);
router.delete("/cursos/:id", cursosRouter.eliminarCurso);
router.get("/cursos/:id", cursosRouter.buscarCursoPorId);

module.exports = router;