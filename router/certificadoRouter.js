const express = require('express');
const router = express.Router();
const CertificadoController = require('../controller/certificadoController');
const aunthmiddleware = require('../middlewares/auth.middleware');

/**
 * @swagger
 * tags:
 *   name: Certificados
 *   description: API para la gestión de certificados
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Certificado:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         id_curso_matriculado:
 *           type: integer
 *         fecha_emision:
 *           type: string
 *           format: date-time
 *         url_certificado:
 *           type: string
 *           format: uri
 *       example:
 *         id: 1
 *         id_curso_matriculado: 1
 *         fecha_emision: "2024-09-15T10:00:00Z"
 *         url_certificado: "http://example.com/cert/12345.pdf"
 *     CertificadoInput:
 *       type: object
 *       required:
 *         - id_curso_matriculado
 *         - fecha_emision
 *         - url_certificado
 *       properties:
 *         id_curso_matriculado:
 *           type: integer
 *           description: ID de la matrícula del curso para la cual se emite el certificado.
 *         fecha_emision:
 *           type: string
 *           format: date-time
 *           description: Fecha de emisión del certificado.
 *         url_certificado:
 *           type: string
 *           format: uri
 *           description: URL donde se puede encontrar el certificado.
 *       example:
 *         id_curso_matriculado: 1
 *         fecha_emision: "2024-09-15T10:00:00Z"
 *         url_certificado: "http://example.com/cert/12345.pdf"
 */

/**
 * @swagger
 * /api/certificado:
 *   get:
 *     summary: Obtiene una lista de todos los certificados
 *     tags: [Certificados]
 *     responses:
 *       200:
 *         description: Lista de certificados.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Certificado'
 *       500:
 *         description: Error en el servidor.
 */
router.get("/certificado", CertificadoController.GetAll);

/**
 * @swagger
 * /api/certificado:
 *   post:
 *     summary: Crea un nuevo certificado (Protegido)
 *     tags: [Certificados]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CertificadoInput'
 *     responses:
 *       200:
 *         description: Certificado creado con éxito.
 *       500:
 *         description: Error al crear el certificado.
 */
router.post("/certificado", aunthmiddleware, CertificadoController.Create);

/**
 * @swagger
 * /api/certificado/{id}:
 *   get:
 *     summary: Obtiene un certificado por su ID (Protegido)
 *     tags: [Certificados]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del certificado.
 *     responses:
 *       200:
 *         description: Detalles del certificado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Certificado'
 *       500:
 *         description: Error al buscar el certificado.
 */
router.get("/certificado/:id", aunthmiddleware, CertificadoController.GetForId);

/**
 * @swagger
 * /api/certificado/{id}:
 *   put:
 *     summary: Actualiza un certificado existente
 *     tags: [Certificados]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del certificado a actualizar.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CertificadoInput'
 *     responses:
 *       200:
 *         description: Certificado actualizado con éxito.
 *       500:
 *         description: Error al actualizar el certificado.
 */
router.put("/certificado/:id", CertificadoController.Update);

/**
 * @swagger
 * /api/certificado/{id}:
 *   delete:
 *     summary: Elimina un certificado por su ID
 *     tags: [Certificados]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del certificado a eliminar.
 *     responses:
 *       200:
 *         description: Certificado eliminado con éxito.
 *       500:
 *         description: Error al eliminar el certificado.
 */
router.delete("/certificado/:id", CertificadoController.Delete);

module.exports = router;
