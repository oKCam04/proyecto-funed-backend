const {asistencia}= require('../models');

class AsistenciaService {
    static async listar_asistencia() {
        try {
            return await asistencia.findAll();
        } catch (error) {
            throw new Error("Error al listar matrículas: " + error.message);
        }
    }

    static async crear_asistencia(id_cursos_matriculados, asistio, fecha) {
        try {
            return await asistencia.create({ id_cursos_matriculados, asistio, fecha });
        } catch (error) {
            throw new Error("Error al crear matrícula: " + error.message);
        }
    }

    static async actualizar_asistencia(id_cursos_matriculados, asistio,fecha) {
        try {
            const matricula = await asistencia.findByPk(id);
            if (!matricula) throw new Error("Matrícula no encontrada");
            return await matricula.update({id_cursos_matriculados, asistio,fecha });
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