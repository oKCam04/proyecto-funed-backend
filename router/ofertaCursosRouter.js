const express = require('express');
const router = express.Router();
const ofertaCursosController = require('../controller/ofertaCursosController');

/**
 * @swagger
 * tags:
 *   name: Oferta de Cursos
 *   description: API para la gestión de la oferta de cursos
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     OfertaCurso:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         codigo_curso:
 *           type: integer
 *         id_curso:
 *           type: integer
 *         fecha_inicio_curso:
 *           type: string
 *           format: date
 *         fecha_fin_curso:
 *           type: string
 *           format: date
 *         horario:
 *           type: string
 *         cupos:
 *           type: integer
 *         precio:
 *           type: number
 *           format: float
 *         foto:
 *           type: string
 *           format: uri
 *       example:
 *         id: 1
 *         codigo_curso: 101
 *         id_curso: 1
 *         fecha_inicio_curso: "2024-08-01"
 *         fecha_fin_curso: "2024-09-01"
 *         horario: "L-V 9-11am"
 *         cupos: 25
 *         precio: 250.50
 *         foto: "http://example.com/curso.png"
 *     OfertaCursoInput:
 *       type: object
 *       required:
 *         - codigo_curso
 *         - id_curso
 *         - fecha_inicio_curso
 *         - fecha_fin_curso
 *         - horario
 *         - cupos
 *         - precio
 *       properties:
 *         codigo_curso:
 *           type: integer
 *         id_curso:
 *           type: integer
 *         fecha_inicio_curso:
 *           type: string
 *           format: date
 *         fecha_fin_curso:
 *           type: string
 *           format: date
 *         horario:
 *           type: string
 *         cupos:
 *           type: integer
 *         idDocente:
 *           type: integer
 *           description: "ID del docente que impartirá el curso (importante para la lógica de negocio)."
 *         precio:
 *           type: number
 *           format: float
 *         foto:
 *           type: string
 *           format: uri
 *       example:
 *         codigo_curso: 101
 *         id_curso: 1
 *         fecha_inicio_curso: "2024-08-01"
 *         fecha_fin_curso: "2024-09-01"
 *         horario: "L-V 9-11am"
 *         cupos: 25
 *         idDocente: 1
 *         precio: 250.50
 *         foto: "http://example.com/curso.png"
 */

/**
 * @swagger
 * /api/ofertaCursos:
 *   get:
 *     summary: Obtiene una lista de todas las ofertas de cursos
 *     tags: [Oferta de Cursos]
 *     security: []
 *     responses:
 *       200:
 *         description: Lista de ofertas de cursos.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/OfertaCurso'
 *       500:
 *         description: Error en el servidor.
 */
router.get("/ofertaCursos", ofertaCursosController.listarOfertasCursos);

/**
 * @swagger
 * /api/ofertaCursos:
 *   post:
 *     summary: Crea una nueva oferta de curso
 *     tags: [Oferta de Cursos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/OfertaCursoInput'
 *     responses:
 *       201:
 *         description: Oferta de curso creada con éxito.
 *       500:
 *         description: Error al crear la oferta.
 */
router.post("/ofertaCursos", ofertaCursosController.crearOfertaCurso);

/**
 * @swagger
 * /api/ofertaCursos/{id}:
 *   get:
 *     summary: Obtiene una oferta de curso por su ID
 *     tags: [Oferta de Cursos]
 *     security: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la oferta de curso.
 *     responses:
 *       200:
 *         description: Detalles de la oferta de curso.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/OfertaCurso'
 *       500:
 *         description: Error al obtener la oferta.
 */
router.get("/ofertaCursos/:id", ofertaCursosController.obtenerOfertaCursoPorId);

/**
 * @swagger
 * /api/ofertaCursos/{id}:
 *   put:
 *     summary: Actualiza una oferta de curso existente
 *     tags: [Oferta de Cursos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la oferta de curso a actualizar.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/OfertaCursoInput'
 *     responses:
 *       200:
 *         description: Oferta de curso actualizada con éxito.
 *       500:
 *         description: Error al actualizar la oferta.
 */
router.put("/ofertaCursos/:id", ofertaCursosController.actualizarOfertaCurso);

/**
 * @swagger
 * /api/ofertaCursos/{id}:
 *   delete:
 *     summary: Elimina una oferta de curso por su ID
 *     tags: [Oferta de Cursos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la oferta de curso a eliminar.
 *     responses:
 *       200:
 *         description: Oferta de curso eliminada con éxito.
 *       500:
 *         description: Error al eliminar la oferta.
 */
router.delete("/ofertaCursos/:id", ofertaCursosController.eliminarOfertaCurso);

module.exports = router;
