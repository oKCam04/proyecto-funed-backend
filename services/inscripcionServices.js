const {inscripcion} = require('../models');

class InscripcionService {
    static async listarInscripciones() {
        try {
            return await inscripcion.findAll();
        } catch (error) {
            console.log("Error en servicio al listar inscripciones");
        }
    }

    static async crearInscripcion(idOfertaCurso, titulo, ofertas, fechaInicioInscripcion, fechaFinInscripcion, personaInscrita) {
        try {
            return await inscripcion.create({ idOfertaCurso, titulo, ofertas, fechaInicioInscripcion, fechaFinInscripcion, personaInscrita });
        } catch (error) {
            console.log("Error en servicio al crear inscripcion");
        }
    }

    static async actualizarInscripcion(id, idOfertaCurso, titulo, ofertas, fechaInicioInscripcion, fechaFinInscripcion, personaInscrita) {
        try {
            const inscripcionEncontrada = await inscripcion.findByPk(id);
            if (!inscripcionEncontrada) {
                throw new Error('Inscripción no encontrada');
            }
            return await inscripcionEncontrada.update({ idOfertaCurso, titulo, ofertas, fechaInicioInscripcion, fechaFinInscripcion, personaInscrita });
        } catch (error) {
            console.log("Error en servicio al actualizar inscripción");
        }
    }

    static async eliminarInscripcion(id) {
        try {
            const inscripcionEncontrada = await inscripcion.findByPk(id);
            if (!inscripcionEncontrada) {
                throw new Error('Inscripción no encontrada');
            }
            return await inscripcionEncontrada.destroy();
        } catch (error) {
            console.log("Error en servicio al eliminar inscripción");
        }
    }
}
module.exports = InscripcionService;