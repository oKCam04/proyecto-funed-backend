const TecnicosService = require("../services/tecnicosService");

class TecnicosController {
    static async listarTecnicos(req, res) {
        try {
            const tecnicosLista = await TecnicosService.listarTecnicos();
            res.json(tecnicosLista);
        } catch (error) {
            res.json({ message: "Error al listar tecnicos" });
        }
    }

    static async crearTecnico(req, res) {
        const { idCurso, reciboPublico, serologia, certificadoEstudio, foto3x4, certificadoEps } = req.body;
        try {
            const nuevoTecnico = await TecnicosService.crearTecnico(idCurso, reciboPublico, serologia, certificadoEstudio, foto3x4, certificadoEps);
            res.json(nuevoTecnico);
        } catch (error) {
            res.json({ message: "Error al crear tecnico" });
        }
    }

    static async actualizarTecnico(req, res) {
        const { id } = req.params;
        const { idCurso, reciboPublico, serologia, certificadoEstudio, foto3x4, certificadoEps } = req.body;
        try {
            const tecnicoActualizado = await TecnicosService.actualizarTecnico(id, idCurso, reciboPublico, serologia, certificadoEstudio, foto3x4, certificadoEps);
            res.json(tecnicoActualizado);
        } catch (error) {
            res.json({ message: "Error al actualizar tecnico" });
        }
    }

    static async eliminarTecnico(req, res) {
        const { id } = req.params;
        try {
            await TecnicosService.eliminarTecnico(id);
            res.json({ mensaje: "Tecnico eliminado exitosamente" });
        } catch (error) {
            res.json({ message: "Error al eliminar tecnico" });
        }
    }
}

module.exports = TecnicosController; 