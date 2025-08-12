
const express = require('express');
const router = express.Router();
const UsuarioController = require('../controller/usuarioController');

router.post("/login", UsuarioController.login);
router.post("/register", UsuarioController.register);


module.exports = router;