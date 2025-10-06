const ModuloService = require("../services/moduloService");

class ModuloController {
    static async listarModulos(req, res) {
        try {
            const modulosLista = await ModuloService.listarModulos();
            res.json(modulosLista);
        } catch (error) {
            res.json({ message: "Error al listar modulos" });
        }
    }

    static async crearModulo(req, res) {
        try {
            const nuevoModulo = await ModuloService.crearModulo(req.body);
            res.json(nuevoModulo);
        } catch (error) {
            res.json({ message: "Error al crear modulo" });
        }
    }

    static async actualizarModulo(req, res) {
        const { id } = req.params;
        try {
            const moduloActualizado = await ModuloService.actualizarModulo(id, req.body);
            res.json(moduloActualizado);
        } catch (error) {
            res.json({ message: "Error al actualizar modulo" });
        }
    }

    static async eliminarModulo(req, res) {
        const { id } = req.params;
        try {
            await ModuloService.eliminarModulo(id);
            res.json({ mensaje: "Modulo eliminado exitosamente" })
        } catch (error) {
            res.json({ message: "Error al eliminar modulo" });
        }
    }

    static async buscarModuloPorId(req, res) {
        const { id } = req.params;
        try {
            const modulo = await ModuloService.buscarModuloPorId(id);
            res.json(modulo);
        } catch (error) {
            res.json({ message: "Error al buscar modulo por ID" });
        }
    }
}
module.exports = ModuloController;