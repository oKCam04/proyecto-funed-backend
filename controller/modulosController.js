const ModulosService = require("../services/modulosService");

class ModulosController {
    static async listarModulos(req, res) {
        try {
            const modulosLista = await ModulosService.listarModulos();
            res.json(modulosLista);
        } catch (error) {
            res.json({ message: "Error al listar modulos" });
        }
    }

    static async crearModulo(req, res) {
        const { idCurso, nombreModulo } = req.body;
        try {
            const nuevoModulo = await ModulosService.crearModulo(idCurso, nombreModulo);
            res.json(nuevoModulo);
        } catch (error) {
            res.json({ message: "Error al crear modulo" });
        }
    }

    static async actualizarModulo(req, res) {
        const { id } = req.params;
        const { idCurso, nombreModulo } = req.body;
        try {
            const moduloActualizado = await ModulosService.actualizarModulo(id, idCurso, nombreModulo);
            res.json(moduloActualizado);
        } catch (error) {
            res.json({ message: "Error al actualizar modulo" });
        }
    }

    static async eliminarModulo(req, res) {
        const { id } = req.params;
        try {
            await ModulosService.eliminarModulo(id);
            res.json({ mensaje: "Modulo eliminado exitosamente" });
        } catch (error) {
            res.json({ message: "Error al eliminar modulo" });
        }
    }
}

module.exports = ModulosController; 