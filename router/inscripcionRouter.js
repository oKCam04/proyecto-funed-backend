const express = require('express');
const router = express.Router();
const inscripcionRouter= require('../controller/inscripcionController');

router.get("/inscripciones", inscripcionRouter.listarInscripciones);
router.post("/inscripciones", inscripcionRouter.crearInscripcion);
router.put("/inscripciones/:id", inscripcionRouter.actualizarInscripcion);
router.delete("/inscripciones/:id", inscripcionRouter.eliminarInscripcion);

module.exports = router;