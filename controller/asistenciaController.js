const AsistenciaService = require('../services/asistenciaService');

class AsistenciaController {
    static async GetAll(req, res) {
        try {
            const data = await AsistenciaService.GetAll();
            res.json(data);
        } catch (error) {
            res.status(500).json({ message: "Error al listar asistencias", error: error.message });
        }
    }

    static async Create(req, res) {
        try {
            const data = await AsistenciaService.Create(req.body);
            res.status(201).json(data);
        } catch (error) {
            res.status(500).json({ message: "Error al crear asistencia", error: error.message });
        }
    }

    static async Update(req, res) {
        const { id } = req.params;
        try {
            const data = await AsistenciaService.Update(id, req.body);
            res.json(data);
        } catch (error) {
            res.status(500).json({ message: "Error al actualizar asistencia", error: error.message });
        }
    }

    static async Delete(req, res) {
        const { id } = req.params;
        try {
            await AsistenciaService.Delete(id);
            res.json({ mensaje: "Asistencia eliminada exitosamente" });
        } catch (error) {
            res.status(500).json({ message: "Error al eliminar asistencia", error: error.message });
        }
    }

    static async GetForId(req, res) {
        const { id } = req.params;
        try {
            const data = await AsistenciaService.GetForId(id);
            res.json(data);
        } catch (error) {
            res.status(500).json({ message: "Error al buscar asistencia por ID", error: error.message });
        }
    }
}

module.exports = AsistenciaController;