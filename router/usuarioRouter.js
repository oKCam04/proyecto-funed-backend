const express = require('express');
const router = express.Router();
const UsuarioController = require('../controller/usuarioController');

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Endpoints de autenticación y gestión de usuarios
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Usuario:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: El ID del usuario.
 *         id_persona:
 *           type: integer
 *           description: El ID de la persona asociada.
 *         email:
 *           type: string
 *           description: El email del usuario.
 *         password:
 *           type: string
 *           description: La contraseña del usuario (no se devuelve en las respuestas).
 *       example:
 *         id: 1
 *         id_persona: 1
 *         email: 'test@example.com'
 *     Login:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *         password:
 *           type: string
 *       example:
 *         email: 'test@example.com'
 *         password: 'password123'
 *     Register:
 *       type: object
 *       required:
 *         - id_persona
 *         - email
 *         - password
 *       properties:
 *         id_persona:
 *           type: integer
 *         email:
 *           type: string
 *         password:
 *           type: string
 *       example:
 *         id_persona: 1
 *         email: 'newuser@example.com'
 *         password: 'password123'
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Inicia sesión de un usuario
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Login'
 *     responses:
 *       200:
 *         description: Login exitoso, devuelve un token.
 *       401:
 *         description: Credenciales inválidas.
 */
router.post("/login", UsuarioController.login);

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Registra un nuevo usuario
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Register'
 *     responses:
 *       200:
 *         description: Usuario registrado correctamente.
 *       500:
 *         description: Error en el servidor.
 */
router.post("/register", UsuarioController.register);

/**
 * @swagger
 * /auth/user:
 *   get:
 *     summary: Obtiene la lista de todos los usuarios
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: Una lista de usuarios.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Usuario'
 *       500:
 *         description: Error en el servidor.
 */
router.get("/user", UsuarioController.getAll);

/**
 * @swagger
 * /auth/user/{id}:
 *   put:
 *     summary: Actualiza un usuario existente
 *     tags: [Auth]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: El ID del usuario a actualizar.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Register' # Re-uses the register schema for update
 *     responses:
 *       200:
 *         description: Usuario actualizado correctamente.
 *       500:
 *         description: Error al actualizar el usuario.
 */
router.put("/user/:id", UsuarioController.actualizarUsuario);

module.exports = router;