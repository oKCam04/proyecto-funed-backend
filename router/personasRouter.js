const express = require('express');
const router = express.Router();
const PersonasRouter = require('../controller/personasController');

router.get("/personas", PersonasRouter.listarPersonas);
router.post("/personas", PersonasRouter.crearPersona);
router.put("/personas/:id", PersonasRouter.actualizarPersona);
router.delete("/personas/:id", PersonasRouter.eliminarPersona);

module.exports = router;