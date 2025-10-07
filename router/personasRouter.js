const express = require('express');
const router = express.Router();
const personasController = require('../controller/personasController');

router.get("/personas", personasController.listarPersonas);

router.post("/personas", personasController.crearPersona);

router.get("/personas/:id", personasController.buscarPersonaPorId);

router.patch("/personas/:id", personasController.actualizarPersona);

router.delete("/personas/:id", personasController.eliminarPersona);

// Reenviar correo de bienvenida
router.post("/personas/:id/send-welcome", personasController.enviarCorreoBienvenida);

module.exports = router;
