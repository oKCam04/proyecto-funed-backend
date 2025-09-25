const docenteService = require('../services/docentesServices');

class DocenteController {
    static async listarDocentes(req, res) {
        try {
            const docentes = await docenteService.listarDocentes();
            res.status(200).json(docentes);
        } catch (error) {
            console.error("Error al listar docentes:", error);
            res.status(500).json({ message: "Error al listar docentes" });
        }
    }  
    static async crearDocente(req, res) {
        const { id_persona, especialidad, fecha_contratacion, fecha_terminacion } = req.body;
        try {
            const nuevoDocente = await docenteService.crearDocente(id_persona, especialidad, fecha_contratacion, fecha_terminacion);
            res.status(201).json(nuevoDocente);
        } catch (error) {
            console.error("Error al crear docente:", error);
            res.status(500).json({ message: "Error al crear docente" });
        }
    }

    static async actualizarDocente(req, res) {
        const { id } = req.params;
        const { id_persona, especialidad, fecha_contratacion, fecha_terminacion } = req.body;
        try {
            const docenteActualizado = await docenteService.actualizarDocente(id, id_persona, especialidad, fecha_contratacion, fecha_terminacion);
            res.status(200).json(docenteActualizado);
        } catch (error) {
            console.error("Error al actualizar docente:", error);
            res.status(500).json({ message: "Error al actualizar docente" });
        }
    }

    static async eliminarDocente(req, res) {
        const { id } = req.params;
        try {
            await docenteService.eliminarDocente(id);
            res.status(204).json({ message: "Docente eliminado correctamente" });
        } catch (error) {
            console.error("Error al eliminar docente:", error);
            res.status(500).json({ message: "Error al eliminar docente" });
        }
    }
}
module.exports = DocenteController;