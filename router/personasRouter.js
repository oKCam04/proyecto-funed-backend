const express = require('express');
const router = express.Router();
const personasController = require('../controller/personasController');

router.get("/personas", personasController.listarPersonas);

router.post("/personas", personasController.crearPersona);

router.get("/personas/:id", personasController.buscarPersonaPorId);

router.patch("/personas/:id", personasController.actualizarPersona);

router.delete("/personas/:id", personasController.eliminarPersona);

module.exports = router;
