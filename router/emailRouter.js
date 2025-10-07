'use strict';

const express = require('express');
const router = express.Router();
const EmailController = require('../controller/emailController');

// Endpoint dedicado para enviar correo de bienvenida
router.post('/email/send-welcome', EmailController.sendWelcome);

module.exports = router;