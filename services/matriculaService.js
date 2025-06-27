const { matricula } = require('../models');

class MatriculaService {
    static async listarMatricula() {
        try {
            return await matricula.findAll();
        } catch (error) {
            console.log("Error en servicio al listar matricula");
        }
    }
    static async crearMatricula(idEstudiante, idCurso, fechaMatricula, fechaTerminacion, estado, aprobado) {
        try {
            return await matricula.create({ idEstudiante, idCurso, fechaMatricula, fechaTerminacion, estado, aprobado });
        } catch (error) {
            console.log("Error en servicio al crear matricula");
        }
    }
    static async actualizarMatricula(id, idEstudiante, idCurso, fechaMatricula, fechaTerminacion, estado, aprobado) {
        try {
            const matriculaObj = await matricula.findByPk(id);
            if (!matriculaObj) throw new Error('Matricula no encontrada');
            return await matriculaObj.update({ idEstudiante, idCurso, fechaMatricula, fechaTerminacion, estado, aprobado });
        } catch (error) {
            console.log("Error en servicio al actualizar matricula");
        }
    }
    static async eliminarMatricula(id) {
        try {
            const matriculaObj = await matricula.findByPk(id);
            if (!matriculaObj) throw new Error('Matricula no encontrada');
            return await matriculaObj.destroy();
        } catch (error) {
            console.log("Error en servicio al eliminar matricula");
        }
    }
}

module.exports = MatriculaService; 