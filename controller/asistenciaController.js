const AsistenciaService = require('../services/asistenciaService');

class AsistenciaController {
    static async GetAll(req, res) {
        try {
            const asistencia = await AsistenciaService.listar_asistencia();
            res.json(asistencia);
        } catch (error) {
            res.json({ message: "Error al listar cursos", error:error.message });
        }
    }

    static async Create(req, res) {
        const { id_cursos_matriculados, asistio, fecha } = req.body;
        try {
            const nuevo_curso = await AsistenciaService.crearAsistencia(id_cursos_matriculados, asistio, fecha);
            res.json(req.body);
        } catch (error) {
            res.json({ message: "Error al crear curso" });
        }
    }

    static async Update(req, res) {
        const { id } = req.params;
        const { id_cursos_matriculados, asistio, fecha } = req.body;
        try {
            const cursoActualizado = await AsistenciaService.actualizarAsistencia(id, id_cursos_matriculados, asistio, fecha);
            res.json(curso_actualizado);
        } catch (error) {
            res.json({ message: "Error al actualizar curso" });
        }
    }

    static async Delete(req, res) {
        const { id } = req.params;
        try {
            await AsistenciaService.eliminar_asistencia(id);
            res.json({ mensaje: "Curso eliminado exitosamente" });
        } catch (error) {
            res.json({ message: "Error al eliminar curso" });
        }
    }
    
}
module.exports = AsistenciaController;