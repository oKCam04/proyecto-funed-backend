const express = require('express');
const router = express.Router();
const AsistenciaController = require('../controller/asistenciaController');
const aunthmiddleware = require('../middlewares/auth.middleware');

/**
 * @swagger
 * tags:
 *   name: Asistencia
 *   description: API para la gestión de la asistencia
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Asistencia:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         id_curso_matriculado:
 *           type: integer
 *         asistio:
 *           type: string
 *           enum: [Si, No]
 *           description: "Indica si el estudiante asistió."
 *         fecha:
 *           type: string
 *           format: date-time
 *       example:
 *         id: 1
 *         id_curso_matriculado: 1
 *         asistio: "Si"
 *         fecha: "2024-08-05T10:00:00Z"
 *     AsistenciaInput:
 *       type: object
 *       required:
 *         - id_curso_matriculado
 *         - asistio
 *         - fecha
 *       properties:
 *         id_curso_matriculado:
 *           type: integer
 *           description: ID de la matrícula del curso.
 *         asistio:
 *           type: string
 *           enum: [Si, No]
 *           description: "Indica si el estudiante asistió."
 *         fecha:
 *           type: string
 *           format: date-time
 *       example:
 *         id_curso_matriculado: 1
 *         asistio: "Si"
 *         fecha: "2024-08-05T10:00:00Z"
 */

/**
 * @swagger
 * /api/asistencia:
 *   get:
 *     summary: Obtiene una lista de todos los registros de asistencia
 *     tags: [Asistencia]
 *     security: []
 *     responses:
 *       200:
 *         description: Lista de asistencias.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Asistencia'
 *       500:
 *         description: Error en el servidor.
 */
router.get("/asistencia", AsistenciaController.GetAll);

/**
 * @swagger
 * /api/asistencia:
 *   post:
 *     summary: Crea un nuevo registro de asistencia (Protegido)
 *     tags: [Asistencia]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AsistenciaInput'
 *     responses:
 *       200:
 *         description: Asistencia registrada con éxito.
 *       500:
 *         description: Error al registrar la asistencia.
 */
router.post("/asistencia", aunthmiddleware, AsistenciaController.Create);

/**
 * @swagger
 * /api/asistencia/{id}:
 *   put:
 *     summary: Actualiza un registro de asistencia (Protegido)
 *     tags: [Asistencia]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del registro de asistencia.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AsistenciaInput'
 *     responses:
 *       200:
 *         description: Asistencia actualizada con éxito.
 *       500:
 *         description: Error al actualizar la asistencia.
 */
router.put("/asistencia/:id", aunthmiddleware, AsistenciaController.Update);

/**
 * @swagger
 * /api/asistencia/{id}:
 *   delete:
 *     summary: Elimina un registro de asistencia (Protegido)
 *     tags: [Asistencia]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del registro de asistencia.
 *     responses:
 *       200:
 *         description: Asistencia eliminada con éxito.
 *       500:
 *         description: Error al eliminar la asistencia.
 */
router.delete("/asistencia/:id", aunthmiddleware, AsistenciaController.Delete);

/**
 * @swagger
 * /api/asistencia/{id}:
 *   get:
 *     summary: Obtiene un registro de asistencia por ID (Ruta no funcional)
 *     tags: [Asistencia]
 *     description: "ADVERTENCIA: Esta ruta parece estar incompleta en el código fuente (no tiene un controlador asignado)."
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del registro de asistencia.
 *     responses:
 *       401:
 *         description: No autorizado (si el token no es válido).
 *       404:
 *         description: No encontrado (la solicitud quedará colgada al no tener controlador).
 */
router.get("/asistencia/:id", aunthmiddleware);

module.exports = router;
