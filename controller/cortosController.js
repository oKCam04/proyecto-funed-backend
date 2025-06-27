const CortosService = require("../services/cortosService");

class CortosController {
    static async listarCortos(req, res) {
        try {
            const cortosLista = await CortosService.listarCortos();
            res.json(cortosLista);
        } catch (error) {
            res.json({ message: "Error al listar cortos" });
        }
    }

    static async crearCorto(req, res) {
        const { idCurso, certificadoEstudio, documentoIdentidad } = req.body;
        try {
            const nuevoCorto = await CortosService.crearCorto(idCurso, certificadoEstudio, documentoIdentidad);
            res.json(nuevoCorto);
        } catch (error) {
            res.json({ message: "Error al crear corto" });
        }
    }

    static async actualizarCorto(req, res) {
        const { id } = req.params;
        const { idCurso, certificadoEstudio, documentoIdentidad } = req.body;
        try {
            const cortoActualizado = await CortosService.actualizarCorto(id, idCurso, certificadoEstudio, documentoIdentidad);
            res.json(cortoActualizado);
        } catch (error) {
            res.json({ message: "Error al actualizar corto" });
        }
    }

    static async eliminarCorto(req, res) {
        const { id } = req.params;
        try {
            await CortosService.eliminarCorto(id);
            res.json({ mensaje: "Corto eliminado exitosamente" });
        } catch (error) {
            res.json({ message: "Error al eliminar corto" });
        }
    }
}

module.exports = CortosController; 