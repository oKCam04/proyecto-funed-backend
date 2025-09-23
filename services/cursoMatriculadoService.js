const {cursomatriculado}= require('../models');

class MatricularCursoService {
    static async listar_matriculas() {
        try {
            return await curso_matriculado.findAll();
        } catch (error) {
            throw new Error("Error al listar matrículas: " + error);
        }
    }

    static async crear_matricula(id_oferta_curso, titulo, ofertas, fecha_inicio_inscripcion, fecha_fin_inscripcion, persona_inscrita) {
        try {
            return await cursomatriculado.create({ id_oferta_curso, titulo, ofertas, fecha_inicio_inscripcion, fecha_fin_inscripcion, persona_inscrita });
        } catch (error) {
            throw new Error("Error al crear matrícula: " + error.message);
        }
    }

    static async actualizar_matricula(id, id_oferta_curso, titulo, ofertas, fecha_inicio_inscripcion, fecha_fin_inscripcion, persona_inscrita) {
        try {
            const matricula = await cursomatriculado.findByPk(id);
            if (!matricula) {
                throw new Error("Matrícula no encontrada");
            }
            return await matricula.update({ idOfertaCurso, titulo, ofertas, fechaInicioInscripcion, fechaFinInscripcion, personaInscrita });
        } catch (error) {
            throw new Error("Error al actualizar matrícula: " + error.message);
        }
    }

    static async eliminarMatricula(id) {
        try {
            const matricula = await cursomatriculado.findByPk(id);
            if (!matricula) {
                throw new Error("Matrícula no encontrada");
            }
            return await matricula.destroy();
        } catch (error) {
            throw new Error("Error al eliminar matrícula: " + error.message);
        }
    }
}

module.exports = MatricularCursoService;