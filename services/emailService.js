'use strict';

const nodemailer = require('nodemailer');

const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const MAIL_FROM = process.env.MAIL_FROM || 'no-reply@funed.local';
const MAIL_FROM_NAME = process.env.MAIL_FROM_NAME || 'FUNED';
const APP_URL = process.env.APP_URL || '';

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
    // Evita bloqueos prolongados si el servidor SMTP no responde
    connectionTimeout: 10000, // tiempo máximo para conectar (ms)
    greetingTimeout: 10000,   // tiempo máximo esperando el saludo del servidor (ms)
    socketTimeout: 10000,     // tiempo máximo de inactividad en el socket (ms)
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

async function sendPaymentApproved({ to, nombre, curso }) {
  assertSmtpConfig();

  const transport = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_PORT === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
    // Evita bloqueos prolongados si el servidor SMTP no responde
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 10000,
  });

  const from = `${MAIL_FROM_NAME} <${MAIL_FROM}>`;
  const subject = 'Pago aprobado - Acceso al curso';
  const accesoTexto = APP_URL ? `Ingresa al aplicativo: ${APP_URL}` : 'Ingresa al aplicativo para acceder a tu curso.';
  const text = `Hola ${nombre || ''},\n\nTu pago para el curso "${curso}" ha sido aprobado.\n\n${accesoTexto}\n\nÉxitos en tu proceso de formación.\n\nEquipo FUNED`;
  const accesoLink = APP_URL
    ? `<p><a href="${APP_URL}" style="display:inline-block;padding:10px 16px;background:#0d6efd;color:#fff;text-decoration:none;border-radius:6px">Ingresar al aplicativo</a></p>`
    : '<p>Ingresa al aplicativo para acceder a tu curso.</p>';
  const html = `
    <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto; line-height:1.6"> 
      <h2>Pago aprobado</h2>
      <p>Hola <strong>${nombre || ''}</strong>,</p>
      <p>Tu pago para el curso <strong>${curso}</strong> ha sido aprobado.</p>
      ${accesoLink}
      <p>Éxitos en tu proceso de formación.<br/>Equipo FUNED</p>
    </div>
  `;

  const info = await transport.sendMail({ from, to, subject, text, html });
  return { sent: true, messageId: info.messageId };
}

module.exports = { sendWelcomeOnRegistration, sendPaymentApproved };