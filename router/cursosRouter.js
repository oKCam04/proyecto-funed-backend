const express = require('express');
const router = express.Router();
const cursosRouter=require('../controller/cursosController');
const aunthmiddleware = require('../middlewares/auth.middleware');

router.get("/cursos", cursosRouter.listarCursos);
router.post("/cursos", aunthmiddleware, cursosRouter.crearCurso);
router.put("/cursos/:id", cursosRouter.actualizarCurso);
router.delete("/cursos/:id", cursosRouter.eliminarCurso);
router.get("/cursos/:id", aunthmiddleware,cursosRouter.buscarCursoPorId);

module.exports = router;