const {asistencia}= require('../models');

class AsistenciaService {
    static async listarAsistencia() {
        try {
            return await asistencia.findAll();
        } catch (error) {
            throw new Error("Error al listar matrículas: " + error.message);
        }
    }

    static async crearAsistencia(idCursosMatriculados, asistio,fecha) {
        try {
            return await asistencia.create({ idCursosMatriculados, asistio,fecha });
        } catch (error) {
            throw new Error("Error al crear matrícula: " + error.message);
        }
    }

    static async actualizarAsistencia(idCursosMatriculados, asistio,fecha) {
        try {
            const matricula = await asistencia.findByPk(id);
            if (!matricula) throw new Error("Matrícula no encontrada");
            return await matricula.update({idCursosMatriculados, asistio,fecha });
        } catch (error) {
            throw new Error("Error al actualizar matrícula: " + error.message);
        }
    }

    static async eliminarAsistencia(id) {
        try {
            const matricula = await asistencia.findByPk(id);
            if (!matricula) throw new Error("Matrícula no encontrada");
            return await matricula.destroy();
        } catch (error) {
            throw new Error("Error al eliminar matrícula: " + error.message);
        }
    }
}

module.exports = AsistenciaService;