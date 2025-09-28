const express = require('express');
const router = express.Router();
const PersonasRouter = require('../controller/personasController');

/**
 * @swagger
 * tags:
 *   name: Personas
 *   description: API para la gestión de personas
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Persona:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: El ID autoincremental de la persona.
 *         nombre:
 *           type: string
 *           description: Nombre de la persona.
 *         apellido:
 *           type: string
 *           description: Apellido de la persona.
 *         numero_identificacion:
 *           type: string
 *           description: Número de identificación.
 *         tipo_identificacion:
 *           type: string
 *           enum: [CC, TI, CE, PAS]
 *           description: Tipo de documento de identificación.
 *         fecha_nacimiento:
 *           type: string
 *           format: date
 *           description: Fecha de nacimiento.
 *         telefono:
 *           type: string
 *           description: Número de teléfono.
 *         correo:
 *           type: string
 *           format: email
 *           description: Correo electrónico.
 *         rol:
 *           type: string
 *           enum: [Administrador, Usuario, Estudiante, Docente]
 *           description: Rol de la persona en el sistema.
 *       example:
 *         id: 1
 *         nombre: "Juan"
 *         apellido: "Perez"
 *         numero_identificacion: "123456789"
 *         tipo_identificacion: "CC"
 *         fecha_nacimiento: "1990-01-15"
 *         telefono: "3001234567"
 *         correo: "juan.perez@example.com"
 *         rol: "Estudiante"
 *     PersonaInput:
 *       type: object
 *       required:
 *         - nombre
 *         - apellido
 *         - numero_identificacion
 *         - tipo_identificacion
 *         - fecha_nacimiento
 *         - telefono
 *         - correo
 *         - rol
 *       properties:
 *         nombre:
 *           type: string
 *         apellido:
 *           type: string
 *         numero_identificacion:
 *           type: string
 *         tipo_identificacion:
 *           type: string
 *           enum: [CC, TI, CE, PAS]
 *         fecha_nacimiento:
 *           type: string
 *           format: date
 *         telefono:
 *           type: string
 *         correo:
 *           type: string
 *           format: email
 *         rol:
 *           type: string
 *           enum: [Administrador, Usuario, Estudiante, Docente]
 *       example:
 *         nombre: "Juan"
 *         apellido: "Perez"
 *         numero_identificacion: "123456789"
 *         tipo_identificacion: "CC"
 *         fecha_nacimiento: "1990-01-15"
 *         telefono: "3001234567"
 *         correo: "juan.perez@example.com"
 *         rol: "Estudiante"
 */

/**
 * @swagger
 * /api/personas:
 *   get:
 *     summary: Obtiene una lista de todas las personas
 *     tags: [Personas]
 *     responses:
 *       200:
 *         description: Lista de personas obtenida con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Persona'
 *       500:
 *         description: Error en el servidor.
 */
router.get("/personas", PersonasRouter.listarPersonas);

/**
 * @swagger
 * /api/personas:
 *   post:
 *     summary: Crea una nueva persona
 *     tags: [Personas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PersonaInput'
 *     responses:
 *       200:
 *         description: Persona creada con éxito.
 *       500:
 *         description: Error al crear la persona.
 */
router.post("/personas", PersonasRouter.crearPersona);

/**
 * @swagger
 * /api/personas/{id}:
 *   get:
 *     summary: Obtiene una persona por su ID
 *     tags: [Personas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la persona a buscar.
 *     responses:
 *       200:
 *         description: Persona encontrada.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Persona'
 *       404:
 *         description: Persona no encontrada.
 *       500:
 *         description: Error en el servidor.
 */
router.get("/personas/:id", PersonasRouter.buscarPersonaPorId);

/**
 * @swagger
 * /api/personas/{id}:
 *   put:
 *     summary: Actualiza una persona existente
 *     tags: [Personas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la persona a actualizar.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PersonaInput'
 *     responses:
 *       200:
 *         description: Persona actualizada con éxito.
 *       404:
 *         description: Persona no encontrada.
 *       500:
 *         description: Error al actualizar la persona.
 */
router.put("/personas/:id", PersonasRouter.actualizarPersona);

/**
 * @swagger
 * /api/personas/{id}:
 *   delete:
 *     summary: Elimina una persona por su ID
 *     tags: [Personas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la persona a eliminar.
 *     responses:
 *       200:
 *         description: Persona eliminada con éxito.
 *       404:
 *         description: Persona no encontrada.
 *       500:
 *         description: Error al eliminar la persona.
 */
router.delete("/personas/:id", PersonasRouter.eliminarPersona);

module.exports = router;
