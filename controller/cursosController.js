const CursosService = require('../services/cursosServices');

class CursosController {
    static async listarCursos(req, res) {
        try {
            const cursosLista = await CursosService.listarCursos();
            res.json(cursosLista);
        } catch (error) {
            res.json({ message: "Error al listar cursos" });
        }
    }

    static async crearCurso(req, res) {
        const { nombreCurso, duracion, temario, tipoCurso } = req.body;
        try {
            const nuevoCurso = await CursosService.crearCurso(nombreCurso, duracion, temario, tipoCurso);
            res.json(req.body);
        } catch (error) {
            res.json({ message: "Error al crear curso" });
        }
    }

    static async actualizarCurso(req, res) {
        const { id } = req.params;
        const { nombreCurso, duracion, temario, tipoCurso } = req.body;
        try {
            const cursoActualizado = await CursosService.actualizarCurso(id, nombreCurso, duracion, temario, tipoCurso);
            res.json(cursoActualizado);
        } catch (error) {
            res.json({ message: "Error al actualizar curso" });
        }
    }

    static async eliminarCurso(req, res) {
        const { id } = req.params;
        try {
            await CursosService.eliminarCurso(id);
            res.json({ mensaje: "Curso eliminado exitosamente" });
        } catch (error) {
            res.json({ message: "Error al eliminar curso" });
        }
    }
}
module.exports = CursosController;