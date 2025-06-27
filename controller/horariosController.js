const HorariosService = require("../services/horariosService");

class HorariosController {
    static async listarHorarios(req, res) {
        try {
            const horariosLista = await HorariosService.listarHorarios();
            res.json(horariosLista);
        } catch (error) {
            res.json({ message: "Error al listar horarios" });
        }
    }

    static async crearHorario(req, res) {
        const { idModulo, diaSemana, horaInicio, horaFin } = req.body;
        try {
            const nuevoHorario = await HorariosService.crearHorario(idModulo, diaSemana, horaInicio, horaFin);
            res.json(nuevoHorario);
        } catch (error) {
            res.json({ message: "Error al crear horario" });
        }
    }

    static async actualizarHorario(req, res) {
        const { id } = req.params;
        const { idModulo, diaSemana, horaInicio, horaFin } = req.body;
        try {
            const horarioActualizado = await HorariosService.actualizarHorario(id, idModulo, diaSemana, horaInicio, horaFin);
            res.json(horarioActualizado);
        } catch (error) {
            res.json({ message: "Error al actualizar horario" });
        }
    }

    static async eliminarHorario(req, res) {
        const { id } = req.params;
        try {
            await HorariosService.eliminarHorario(id);
            res.json({ mensaje: "Horario eliminado exitosamente" });
        } catch (error) {
            res.json({ message: "Error al eliminar horario" });
        }
    }
}

module.exports = HorariosController; 