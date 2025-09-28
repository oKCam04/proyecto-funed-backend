const express = require('express');
const router = express.Router();
const PagoController = require('../controller/pagoController');
const aunthmiddleware = require('../middlewares/auth.middleware');

/**
 * @swagger
 * tags:
 *   name: Pagos
 *   description: API para la gestión de pagos
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Pago:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         id_persona:
 *           type: integer
 *         id_curso_matriculado:
 *           type: integer
 *         forma_pago:
 *           type: string
 *         monto:
 *           type: integer
 *         estado:
 *           type: string
 *         fecha_pago:
 *           type: string
 *           format: date-time
 *       example:
 *         id: 1
 *         id_persona: 1
 *         id_curso_matriculado: 1
 *         forma_pago: "Tarjeta de Crédito"
 *         monto: 250
 *         estado: "Completado"
 *         fecha_pago: "2024-08-01T10:00:00Z"
 *     PagoInput:
 *       type: object
 *       required:
 *         - id_persona
 *         - id_curso_matriculado
 *         - forma_pago
 *         - monto
 *         - estado
 *         - fecha_pago
 *       properties:
 *         id_persona:
 *           type: integer
 *           description: ID de la persona que realiza el pago.
 *         id_curso_matriculado:
 *           type: integer
 *           description: ID de la matrícula del curso asociada al pago.
 *         forma_pago:
 *           type: string
 *         monto:
 *           type: integer
 *         estado:
 *           type: string
 *         fecha_pago:
 *           type: string
 *           format: date-time
 *       example:
 *         id_persona: 1
 *         id_curso_matriculado: 1
 *         forma_pago: "Tarjeta de Crédito"
 *         monto: 250
 *         estado: "Completado"
 *         fecha_pago: "2024-08-01T10:00:00Z"
 */

/**
 * @swagger
 * /api/pago:
 *   get:
 *     summary: Obtiene una lista de todos los pagos
 *     tags: [Pagos]
 *     responses:
 *       200:
 *         description: Lista de pagos.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Pago'
 *       500:
 *         description: Error en el servidor.
 */
router.get("/pago", PagoController.GetAll);

/**
 * @swagger
 * /api/pago:
 *   post:
 *     summary: Crea un nuevo pago (Protegido)
 *     tags: [Pagos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PagoInput'
 *     responses:
 *       200:
 *         description: Pago creado con éxito.
 *       500:
 *         description: Error al crear el pago.
 */
router.post("/pago", aunthmiddleware, PagoController.Create);

/**
 * @swagger
 * /api/pago/{id}:
 *   get:
 *     summary: Obtiene un pago por su ID (Protegido)
 *     tags: [Pagos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del pago.
 *     responses:
 *       200:
 *         description: Detalles del pago.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pago'
 *       500:
 *         description: Error al buscar el pago.
 */
router.get("/pago/:id", aunthmiddleware, PagoController.GetForId);

/**
 * @swagger
 * /api/pago/{id}:
 *   put:
 *     summary: Actualiza un pago existente
 *     tags: [Pagos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del pago a actualizar.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PagoInput'
 *     responses:
 *       200:
 *         description: Pago actualizado con éxito.
 *       500:
 *         description: Error al actualizar el pago.
 */
router.put("/pago/:id", PagoController.Update);

/**
 * @swagger
 * /api/pago/{id}:
 *   delete:
 *     summary: Elimina un pago por su ID
 *     tags: [Pagos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del pago a eliminar.
 *     responses:
 *       200:
 *         description: Pago eliminado con éxito.
 *       500:
 *         description: Error al eliminar el pago.
 */
router.delete("/pago/:id", PagoController.Delete);

module.exports = router;
