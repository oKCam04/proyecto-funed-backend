const express = require('express');
const router = express.Router();
const UsuarioController = require('../controller/usuarioController');

router.post("/login", UsuarioController.login);

router.post("/register", UsuarioController.register);

router.get("/user", UsuarioController.getAll);

router.put("/user/:id", UsuarioController.actualizarUsuario);

module.exports = router;