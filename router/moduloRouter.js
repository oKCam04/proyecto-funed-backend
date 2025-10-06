const express = require('express');
const router = express.Router();
const moduloController = require('../controller/moduloController');

router.get("/modulos", moduloController.listarModulos);

router.post("/modulos", moduloController.crearModulo);

router.get("/modulos/:id", moduloController.buscarModuloPorId);

router.patch("/modulos/:id", moduloController.actualizarModulo);

router.delete("/modulos/:id", moduloController.eliminarModulo);

module.exports = router;