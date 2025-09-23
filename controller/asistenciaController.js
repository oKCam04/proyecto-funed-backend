const AsistenciaService = require('../services/asistenciaService');

class AsistenciaController {
    static async GetAll(req, res) {
        try {
            const asistencia = await AsistenciaService.listarAsistencia();
            res.json(asistencia);
        } catch (error) {
            res.json({ message: "Error al listar cursos", error:error.message });
        }
    }

    static async Create(req, res) {
        const { idCursosMatriculados, asistio, fecha } = req.body;
        try {
            const nuevoCurso = await AsistenciaService.crearAsistencia(idCursosMatriculados, asistio, fecha);
            res.json(req.body);
        } catch (error) {
            res.json({ message: "Error al crear curso" });
        }
    }

    static async Update(req, res) {
        const { id } = req.params;
        const { idCursosMatriculados, asistio, fecha } = req.body;
        try {
            const cursoActualizado = await AsistenciaService.actualizarAsistencia(id, idCursosMatriculados, asistio, fecha);
            res.json(cursoActualizado);
        } catch (error) {
            res.json({ message: "Error al actualizar curso" });
        }
    }

    static async Delete(req, res) {
        const { id } = req.params;
        try {
            await AsistenciaService.eliminarAsistencia(id);
            res.json({ mensaje: "Curso eliminado exitosamente" });
        } catch (error) {
            res.json({ message: "Error al eliminar curso" });
        }
    }
    
}
module.exports = AsistenciaController;