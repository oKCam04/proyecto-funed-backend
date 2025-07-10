const inscripcionService = require('../services/inscripcionServices');

class InscripcionController {
    static async listarInscripciones(req, res) {
        try {
            const inscripcionesLista = await inscripcionService.listarInscripciones();
            res.json(inscripcionesLista);
        } catch (error) {
            res.json({ message: "Error al listar inscripciones" });
        }
    }

    static async crearInscripcion(req, res) {
        const { idOfertaCurso, fechaInicioInscripcion, fechaFinInscripcion, personaInscrita} = req.body;
        try {
            const nuevaInscripcion = await inscripcionService.crearInscripcion(idOfertaCurso, fechaInicioInscripcion, fechaFinInscripcion, personaInscrita);
            res.json(req.body);
        } catch (error) {
            res.json({ message: "Error al crear inscripción" });
        }
    }

    static async actualizarInscripcion(req, res) {
        const { id } = req.params;
        const { idOfertaCurso, fechaInicioInscripcion, fechaFinInscripcion, personaInscrita } = req.body;
        try {
            const inscripcionActualizada = await inscripcionService.actualizarInscripcion(id, idOfertaCurso, fechaInicioInscripcion, fechaFinInscripcion, personaInscrita);
            res.json(inscripcionActualizada);
        } catch (error) {
            res.json({ message: "Error al actualizar inscripción" });
        }
    }

    static async eliminarInscripcion(req, res) {
        const { id } = req.params;
        try {
            await inscripcionService.eliminarInscripcion(id);
            res.json({ mensaje: "Inscripción eliminada exitosamente" });
        } catch (error) {
            res.json({ message: "Error al eliminar inscripción" });
        }
    }
}

module.exports = InscripcionController;