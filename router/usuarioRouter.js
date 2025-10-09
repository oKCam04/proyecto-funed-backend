const express = require('express');
const router = express.Router();
const UsuarioController = require('../controller/usuarioController');

router.post("/login", UsuarioController.login);

router.post("/register", UsuarioController.register);

router.get("/user", UsuarioController.getAll);

router.patch("/user/:id", UsuarioController.actualizarUsuario);

// Recuperación de contraseña
router.post("/forgot-password", UsuarioController.forgotPassword);

module.exports = router;