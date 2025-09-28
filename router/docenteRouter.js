const express = require('express');
const router = express.Router();
const DocenteController = require('../controller/docenteController');

/**
 * @swagger
 * tags:
 *   name: Docentes
 *   description: API para la gestión de docentes
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Docente:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: El ID autoincremental del docente.
 *         id_persona:
 *           type: integer
 *           description: ID de la persona asociada a este docente.
 *         especialidad:
 *           type: string
 *           description: Especialidad del docente.
 *         fecha_contratacion:
 *           type: string
 *           format: date
 *           description: Fecha de contratación del docente.
 *         fecha_terminacion:
 *           type: string
 *           format: date
 *           description: Fecha de terminación de contrato del docente (opcional).
 *       example:
 *         id: 1
 *         id_persona: 2
 *         especialidad: "Desarrollo Frontend"
 *         fecha_contratacion: "2023-01-10"
 *         fecha_terminacion: null
 *     DocenteInput:
 *       type: object
 *       required:
 *         - id_persona
 *         - especialidad
 *         - fecha_contratacion
 *       properties:
 *         id_persona:
 *           type: integer
 *         especialidad:
 *           type: string
 *         fecha_contratacion:
 *           type: string
 *           format: date
 *         fecha_terminacion:
 *           type: string
 *           format: date
 *       example:
 *         id_persona: 2
 *         especialidad: "Desarrollo Frontend"
 *         fecha_contratacion: "2023-01-10"
 */

/**
 * @swagger
 * /api/docente:
 *   get:
 *     summary: Obtiene una lista de todos los docentes
 *     tags: [Docentes]
 *     responses:
 *       200:
 *         description: Lista de docentes.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Docente'
 *       500:
 *         description: Error en el servidor.
 */
router.get("/docente", DocenteController.listarDocentes);

/**
 * @swagger
 * /api/docente:
 *   post:
 *     summary: Crea un nuevo docente
 *     tags: [Docentes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DocenteInput'
 *     responses:
 *       201:
 *         description: Docente creado con éxito.
 *       500:
 *         description: Error al crear el docente.
 */
router.post("/docente", DocenteController.crearDocente);

/**
 * @swagger
 * /api/docente/{id}:
 *   put:
 *     summary: Actualiza un docente existente
 *     tags: [Docentes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del docente a actualizar.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DocenteInput'
 *     responses:
 *       200:
 *         description: Docente actualizado con éxito.
 *       500:
 *         description: Error al actualizar el docente.
 */
router.put("/docente/:id", DocenteController.actualizarDocente);

/**
 * @swagger
 * /api/docente/{id}:
 *   delete:
 *     summary: Elimina un docente por su ID
 *     tags: [Docentes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del docente a eliminar.
 *     responses:
 *       204:
 *         description: Docente eliminado con éxito.
 *       500:
 *         description: Error al eliminar el docente.
 */
router.delete("/docente/:id", DocenteController.eliminarDocente);

module.exports = router;
