const ofertaCursosService = require('../services/ofertaCursoServices');

class OfertaCursosController {
    static async listarOfertasCursos(req, res) {
        try {
            const ofertasCursosLista = await ofertaCursosService.listarOfertasCursos();
            res.json(ofertasCursosLista);
        } catch (error) {
            res.status(500).json({ message: "Error al listar ofertas de cursos" });
        }
    }

    static async crearOfertaCurso(req, res) {
        const { codigoCurso, idCurso, fechaInicioCurso, fechaFinCurso, horario, cupos, idDocente,precio } = req.body;
        try {
            const nuevaOfertaCurso = await ofertaCursosService.crearOfertaCurso(codigoCurso, idCurso, fechaInicioCurso, fechaFinCurso, horario, cupos, idDocente,precio );
            res.status(201).json(nuevaOfertaCurso);
        } catch (error) {
            res.status(500).json({ message: "Error al crear oferta de curso" });
        }
    }

    static async actualizarOfertaCurso(req, res) {
        const { id } = req.params;
        const { codigoCurso, idCurso, fechaInicioCurso, fechaFinCurso, horario, cupos, idDocente,precio  } = req.body;
        try {
            const ofertaCursoActualizada = await ofertaCursosService.actualizarOfertaCurso(id, codigoCurso, idCurso, fechaInicioCurso, fechaFinCurso, horario, cupos, idDocente,precio );
            res.json(ofertaCursoActualizada);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Error al actualizar oferta de curso" });
        }
    }

    static async eliminarOfertaCurso(req, res) {
        const { id } = req.params;
        try {
            await ofertaCursosService.eliminarOfertaCurso(id);
            res.json({ mensaje: "Oferta de curso eliminada exitosamente" });
        } catch (error) {
            res.status(500).json({ message: "Error al eliminar oferta de curso" });
        }
    }
}

module.exports = OfertaCursosController;