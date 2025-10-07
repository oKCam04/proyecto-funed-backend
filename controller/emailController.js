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

  // Enviar correo cuando el pago del curso ha sido aprobado
  static async sendPaymentApproved(req, res) {
    try {
      const { email, nombre, curso } = req.body;
      if (!email || !curso) {
        return res.status(400).json({ message: 'email y curso son requeridos' });
      }

      const result = await EmailService.sendPaymentApproved({
        to: email,
        nombre,
        curso,
      });

      if (result.sent) {
        return res.json({ message: 'Correo de aprobación enviado', messageId: result.messageId });
      }
      return res.status(500).json({ message: 'No se pudo enviar el correo de aprobación', reason: result.reason });
    } catch (error) {
      res.status(500).json({ message: 'Error al enviar correo de aprobación', error: error.message });
    }
  }
}

module.exports = EmailController;