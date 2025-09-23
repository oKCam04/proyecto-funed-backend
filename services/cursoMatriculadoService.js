const {cursomatriculado}= require('../models');

class MatricularCursoService {
    static async listarMatriculas() {
        try {
            return await cursomatriculado.findAll();
        } catch (error) {
            throw new Error("Error al listar matrículas: " + error);
        }
    }

    static async crearMatricula(idOfertaCurso, titulo, ofertas, fechaInicioInscripcion, fechaFinInscripcion, personaInscrita) {
        try {
            return await cursomatriculado.create({ idOfertaCurso, titulo, ofertas, fechaInicioInscripcion, fechaFinInscripcion, personaInscrita });
        } catch (error) {
            throw new Error("Error al crear matrícula: " + error.message);
        }
    }

    static async actualizarMatricula(id, idOfertaCurso, titulo, ofertas, fechaInicioInscripcion, fechaFinInscripcion, personaInscrita) {
        try {
            const matricula = await cursomatriculado.findByPk(id);
            if (!matricula) throw new Error("Matrícula no encontrada");
            return await matricula.update({ idOfertaCurso, titulo, ofertas, fechaInicioInscripcion, fechaFinInscripcion, personaInscrita });
        } catch (error) {
            throw new Error("Error al actualizar matrícula: " + error.message);
        }
    }

    static async eliminarMatricula(id) {
        try {
            const matricula = await cursomatriculado.findByPk(id);
            if (!matricula) throw new Error("Matrícula no encontrada");
            return await matricula.destroy();
        } catch (error) {
            throw new Error("Error al eliminar matrícula: " + error.message);
        }
    }
}

module.exports = MatricularCursoService;