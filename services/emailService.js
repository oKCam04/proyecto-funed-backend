'use strict';

const nodemailer = require('nodemailer');

const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const MAIL_FROM = process.env.MAIL_FROM || 'no-reply@funed.local';
const MAIL_FROM_NAME = process.env.MAIL_FROM_NAME || 'FUNED';

function assertSmtpConfig() {
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    throw new Error('SMTP config faltante. Define SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS');
  }
}

async function sendWelcomeOnRegistration({ to, nombre, email, numero_identificacion }) {
  assertSmtpConfig();

  const transport = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_PORT === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const from = `${MAIL_FROM_NAME} <${MAIL_FROM}>`;
  const subject = 'Bienvenido a FUNED - Credenciales de acceso';
  const text = `Hola ${nombre || ''},\n\nTe damos la bienvenida.\n\nTus credenciales para ingresar:\n- Usuario (correo): ${email}\n- Contraseña: ${numero_identificacion}\n\nPor seguridad, te recomendamos cambiar tu contraseña después del primer ingreso.\n\nAtentamente,\nEquipo FUNED`;
  const html = `
    <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto; line-height:1.6"> 
      <h2>Bienvenido a FUNED</h2>
      <p>Hola <strong>${nombre || ''}</strong>,</p>
      <p>Tu registro fue exitoso. Estas son tus credenciales:</p>
      <ul>
        <li><strong>Usuario (correo):</strong> ${email}</li>
        <li><strong>Contraseña:</strong> ${numero_identificacion}</li>
      </ul>
      <p><em>Recomendación:</em> cambia tu contraseña tras el primer ingreso.</p>
      <p>Saludos,<br/>Equipo FUNED</p>
    </div>
  `;

  const info = await transport.sendMail({ from, to, subject, text, html });
  return { sent: true, messageId: info.messageId };
}

module.exports = { sendWelcomeOnRegistration };