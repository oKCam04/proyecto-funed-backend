const MatriculaService = require("../services/matriculaService");

class MatriculaController {
    static async listarMatricula(req, res) {
        try {
            const matriculaLista = await MatriculaService.listarMatricula();
            res.json(matriculaLista);
        } catch (error) {
            res.json({ message: "Error al listar matricula" });
        }
    }

    static async crearMatricula(req, res) {
        const { idEstudiante, idCurso, fechaMatricula, fechaTerminacion, estado, aprobado } = req.body;
        try {
            const nuevaMatricula = await MatriculaService.crearMatricula(idEstudiante, idCurso, fechaMatricula, fechaTerminacion, estado, aprobado);
            res.json(nuevaMatricula);
        } catch (error) {
            res.json({ message: "Error al crear matricula" });
        }
    }

    static async actualizarMatricula(req, res) {
        const { id } = req.params;
        const { idEstudiante, idCurso, fechaMatricula, fechaTerminacion, estado, aprobado } = req.body;
        try {
            const matriculaActualizada = await MatriculaService.actualizarMatricula(id, idEstudiante, idCurso, fechaMatricula, fechaTerminacion, estado, aprobado);
            res.json(matriculaActualizada);
        } catch (error) {
            res.json({ message: "Error al actualizar matricula" });
        }
    }

    static async eliminarMatricula(req, res) {
        const { id } = req.params;
        try {
            await MatriculaService.eliminarMatricula(id);
            res.json({ mensaje: "Matricula eliminada exitosamente" });
        } catch (error) {
            res.json({ message: "Error al eliminar matricula" });
        }
    }
}

module.exports = MatriculaController; 