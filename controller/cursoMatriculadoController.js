const matricularCursoService = require('../services/cursoMatriculadoService');

class MatricularCursoController {
    static async listar_matriculas(req, res) {
        try {
            const matriculas_lista = await matricularCursoService.listar_matriculas();
            res.json(matriculas_lista);
        } catch (error) {
            res.json({ message: "Error al listar matrículas", error:error.message });
        }
    }

    static async crear_matricula(req, res) {
        const { id_oferta_curso, persona_inscrita } = req.body;
        try {
            const nuevaMatricula = await matricularCursoService.crear_matricula(id_oferta_curso, persona_inscrita);
            res.json(nueva_matricula);
        } catch (error) {
            res.json({ message: "Error al crear matrícula" });
        }
    }

    static async eliminar_matricula(req, res) {
        const { id } = req.params;
        try {
            await matricularCursoService.eliminar_matricula(id);
            res.json({ mensaje: "Matrícula eliminada exitosamente" });
        } catch (error) {
            res.json({ message: "Error al eliminar matrícula" });
        }
    }
}
module.exports = MatricularCursoController;