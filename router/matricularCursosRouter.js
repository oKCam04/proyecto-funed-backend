const express = require('express');
const router = express.Router();
const CursosMatriculados = require('../controller/cursoMatriculadoController');

/**
 * @swagger
 * tags:
 *   name: Matrículas
 *   description: API para la gestión de matrículas de cursos
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     CursoMatriculado:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         id_curso_oferta:
 *           type: integer
 *         id_persona:
 *           type: integer
 *         estado:
 *           type: string
 *           enum: [PreInscrito, Matriculado, Cancelado, Finalizado]
 *         resultado:
 *           type: string
 *           enum: [Aprobado, Reprobado, Pendiente]
 *       example:
 *         id: 1
 *         id_curso_oferta: 1
 *         id_persona: 1
 *         estado: "Matriculado"
 *         resultado: "Pendiente"
 *     MatriculaInput:
 *       type: object
 *       required:
 *         - id_curso_oferta
 *         - id_persona
 *       properties:
 *         id_curso_oferta:
 *           type: integer
 *           description: ID de la oferta de curso a la que se matricula.
 *         id_persona:
 *           type: integer
 *           description: ID de la persona que se está matriculando.
 *       example:
 *         id_curso_oferta: 1
 *         id_persona: 1
 */

/**
 * @swagger
 * /api/matriculas:
 *   get:
 *     summary: Obtiene una lista de todas las matrículas
 *     tags: [Matrículas]
 *     responses:
 *       200:
 *         description: Lista de matrículas.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/CursoMatriculado'
 */
router.get("/matriculas", CursosMatriculados.listarMatriculas);

/**
 * @swagger
 * /api/matriculas:
 *   post:
 *     summary: Crea una nueva matrícula
 *     tags: [Matrículas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MatriculaInput'
 *     responses:
 *       201:
 *         description: Matrícula creada con éxito.
 *       400:
 *         description: Error en la solicitud.
 */
router.post("/matriculas", CursosMatriculados.crearMatricula);

/**
 * @swagger
 * /api/matriculas/{id}:
 *   delete:
 *     summary: Elimina una matrícula por su ID
 *     tags: [Matrículas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la matrícula a eliminar.
 *     responses:
 *       200:
 *         description: Matrícula eliminada con éxito.
 *       500:
 *         description: Error al eliminar la matrícula.
 */
router.delete("/matriculas/:id", CursosMatriculados.eliminarMatricula);

/**
 * @swagger
 * /api/matriculas/{id}:
 *   put:
 *     summary: Actualiza una matrícula (Ruta no funcional)
 *     tags: [Matrículas]
 *     description: "ADVERTENCIA: Esta ruta parece estar incompleta en el código fuente (no tiene un controlador asignado)."
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la matrícula a actualizar.
 *     responses:
 *       501:
 *         description: No implementado.
 */
router.put("/matriculas/:id", CursosMatriculados);

/**
 * @swagger
 * /api/cursosPersonas/{id}:
 *   get:
 *     summary: Obtiene los cursos matriculados por una persona
 *     tags: [Matrículas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la persona.
 *     responses:
 *       200:
 *         description: Cursos de la persona.
 *       400:
 *         description: Error en la consulta.
 */
router.get("/cursosPersonas/:id", CursosMatriculados.cursoMatriculadoPersona);

/**
 * @swagger
 * /api/modulosPersona/{id_persona}/{id_oferta_curso}:
 *   get:
 *     summary: Obtiene los módulos de un curso para una persona matriculada
 *     tags: [Matrículas]
 *     parameters:
 *       - in: path
 *         name: id_persona
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la persona.
 *       - in: path
 *         name: id_oferta_curso
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la oferta del curso.
 *     responses:
 *       200:
 *         description: Módulos del curso para la persona.
 *       400:
 *         description: Error en la consulta.
 */
router.get("/modulosPersona/:id_persona/:id_oferta_curso", CursosMatriculados.obtenerModuloPersona);

module.exports = router;
