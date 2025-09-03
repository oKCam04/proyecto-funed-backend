const CertificadoService = require('../services/certificadoService');

class CertificadoController {
    static async GetAll(req, res) {
        try {
            const data = await CertificadoService.GetAll();
            res.json(data);
        } catch (error) {
            res.json({ message: "Error al listar cursos" });
        }
    }

    static async Create(req, res) {
        const { idCursoMatriculado, fechaEmision, urlCertificado } = req.body;
        try {
            const data = await CertificadoService.Create(idCursoMatriculado, fechaEmision, urlCertificado);
            res.json(req.body);
        } catch (error) {
            res.json({ message: "Error al crear curso" });
        }
    }

    static async Update(req, res) {
        const { id } = req.params;
        const { idCursoMatriculado, fechaEmision, urlCertificado } = req.body;
        try {
            const data = await CertificadoService.Update(id, idCursoMatriculado, fechaEmision, urlCertificado);
            res.json(data);
        } catch (error) {
            res.json({ message: "Error al actualizar curso" });
        }
    }

    static async Delete(req, res) {
        const { id } = req.params;
        try {
            await CertificadoService.Delete(id);
            res.json({mensaje:"Eliminado exitosamente"})
        } catch (error) {
            res.json({ message: "Error al eliminar " });
        }
    }

    static async GetForId(req, res) {
        const { id } = req.params;
        try {
            await CertificadoService.GetForId(id);
            res.json({ mensaje: "Curso eliminado exitosamente" });
        } catch (error) {
            res.json({ message: "Error al eliminar curso" });
        }
    }
    
}
module.exports = CertificadoController;