const { horarios } = require('../models');

class HorariosService {
    static async listarHorarios() {
        try {
            return await horarios.findAll();
        } catch (error) {
            console.log("Error en servicio al listar horarios");
        }
    }
    static async crearHorario(idModulo, diaSemana, horaInicio, horaFin) {
        try {
            return await horarios.create({ idModulo, diaSemana, horaInicio, horaFin });
        } catch (error) {
            console.log("Error en servicio al crear horario");
        }
    }
    static async actualizarHorario(id, idModulo, diaSemana, horaInicio, horaFin) {
        try {
            const horario = await horarios.findByPk(id);
            if (!horario) throw new Error('Horario no encontrado');
            return await horario.update({ idModulo, diaSemana, horaInicio, horaFin });
        } catch (error) {
            console.log("Error en servicio al actualizar horario");
        }
    }
    static async eliminarHorario(id) {
        try {
            const horario = await horarios.findByPk(id);
            if (!horario) throw new Error('Horario no encontrado');
            return await horario.destroy();
        } catch (error) {
            console.log("Error en servicio al eliminar horario");
        }
    }
}

module.exports = HorariosService; 