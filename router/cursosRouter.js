const express = require('express');
const router = express.Router();
const cursosRouter = require('../controller/cursosController');
const aunthmiddleware = require('../middlewares/auth.middleware');

/**
 * @swagger
 * tags:
 *   name: Cursos
 *   description: API para la gestión de los cursos base
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Curso:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         nombre_curso:
 *           type: string
 *         duracion:
 *           type: integer
 *           description: Duración del curso en horas.
 *         temario:
 *           type: string
 *           description: Contenido del temario del curso.
 *         tipo_curso:
 *           type: string
 *       example:
 *         id: 1
 *         nombre_curso: "Desarrollo Web Full Stack"
 *         duracion: 40
 *         temario: "HTML, CSS, JavaScript, Node.js"
 *         tipo_curso: "Tecnología"
 *     CursoInput:
 *       type: object
 *       required:
 *         - nombre_curso
 *         - duracion
 *         - temario
 *         - tipo_curso
 *       properties:
 *         nombre_curso:
 *           type: string
 *         duracion:
 *           type: integer
 *         temario:
 *           type: string
 *         tipo_curso:
 *           type: string
 *       example:
 *         nombre_curso: "Desarrollo Web Full Stack"
 *         duracion: 40
 *         temario: "HTML, CSS, JavaScript, Node.js"
 *         tipo_curso: "Tecnología"
 */

/**
 * @swagger
 * /api/cursos:
 *   get:
 *     summary: Obtiene una lista de todos los cursos
 *     tags: [Cursos]
 *     security: []
 *     responses:
 *       200:
 *         description: Lista de cursos.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Curso'
 */
router.get("/cursos", cursosRouter.listarCursos);

/**
 * @swagger
 * /api/cursos:
 *   post:
 *     summary: Crea un nuevo curso (Protegido)
 *     tags: [Cursos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CursoInput'
 *     responses:
 *       200:
 *         description: Curso creado con éxito.
 *       401:
 *         description: No autorizado.
 *       500:
 *         description: Error al crear el curso.
 */
router.post("/cursos", aunthmiddleware, cursosRouter.crearCurso);

/**
 * @swagger
 * /api/cursos/{id}:
 *   get:
 *     summary: Obtiene un curso por su ID (Protegido)
 *     tags: [Cursos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del curso.
 *     responses:
 *       200:
 *         description: Detalles del curso.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Curso'
 *       401:
 *         description: No autorizado.
 *       404:
 *         description: Curso no encontrado.
 */
router.get("/cursos/:id", aunthmiddleware, cursosRouter.buscarCursoPorId);

/**
 * @swagger
 * /api/cursos/{id}:
 *   put:
 *     summary: Actualiza un curso existente
 *     tags: [Cursos]
 *     security: [] 
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del curso a actualizar.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CursoInput'
 *     responses:
 *       200:
 *         description: Curso actualizado con éxito.
 *       404:
 *         description: Curso no encontrado.
 *       500:
 *         description: Error al actualizar el curso.
 */
router.put("/cursos/:id", cursosRouter.actualizarCurso);

/**
 * @swagger
 * /api/cursos/{id}:
 *   delete:
 *     summary: Elimina un curso por su ID
 *     tags: [Cursos]
 *     security: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del curso a eliminar.
 *     responses:
 *       200:
 *         description: Curso eliminado con éxito.
 *       404:
 *         description: Curso no encontrado.
 *       500:
 *         description: Error al eliminar el curso.
 */
router.delete("/cursos/:id", cursosRouter.eliminarCurso);

module.exports = router;
