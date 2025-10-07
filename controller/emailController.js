'use strict';

const EmailService = require('../services/emailService');

class EmailController {
  // Endpoint desacoplado: recibe email y número de identificación desde el front
  static async sendWelcome(req, res) {
    try {
      const { email, numero_identificacion, nombre } = req.body;
      if (!email || !numero_identificacion) {
        return res.status(400).json({ message: 'email y numero_identificacion son requeridos' });
      }

      const result = await EmailService.sendWelcomeOnRegistration({
        to: email,
        nombre,
        email,
        numero_identificacion,
      });

      if (result.sent) {
        return res.json({ message: 'Correo de bienvenida enviado', messageId: result.messageId });
      }
      return res.status(500).json({ message: 'No se pudo enviar el correo', reason: result.reason });
    } catch (error) {
      res.status(500).json({ message: 'Error al enviar correo de bienvenida', error: error.message });
    }
  }
}

module.exports = EmailController;