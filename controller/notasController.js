const NotasService = require("../services/notasService");

class NotasController {
    static async listarNotas(req, res) {
        try {
            const notasLista = await NotasService.listarNotas();
            res.json(notasLista);
        } catch (error) {
            res.json({ message: "Error al listar notas" });
        }
    }

    static async crearNota(req, res) {
        const { idEstudiante, idModulo, nota, fechaNota, estado } = req.body;
        try {
            const nuevaNota = await NotasService.crearNota(idEstudiante, idModulo, nota, fechaNota, estado);
            res.json(nuevaNota);
        } catch (error) {
            res.json({ message: "Error al crear nota" });
        }
    }

    static async actualizarNota(req, res) {
        const { id } = req.params;
        const { idEstudiante, idModulo, nota, fechaNota, estado } = req.body;
        try {
            const notaActualizada = await NotasService.actualizarNota(id, idEstudiante, idModulo, nota, fechaNota, estado);
            res.json(notaActualizada);
        } catch (error) {
            res.json({ message: "Error al actualizar nota" });
        }
    }

    static async eliminarNota(req, res) {
        const { id } = req.params;
        try {
            await NotasService.eliminarNota(id);
            res.json({ mensaje: "Nota eliminada exitosamente" });
        } catch (error) {
            res.json({ message: "Error al eliminar nota" });
        }
    }
}

module.exports = NotasController; 