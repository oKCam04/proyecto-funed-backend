const {docentes} = require('../models');

class DocentesService {
    static async listarDocentes() {
        try {
            return await docentes.findAll();
        } catch (error) {
            console.log("Error en servicio al listar docentes");
            
        }
    }

    static async crearDocente(idPersona, especialidad, fechaContratacion, fechaTerminacion) {
        try {
            return await docentes.create({ idPersona, especialidad, fechaContratacion, fechaTerminacion });
        } catch (error) {
            console.log("Error en servicio al crear docente");
        }
    }

    static async actualizarDocente(id, idPersona, especialidad, fechaContratacion, fechaTerminacion) {
        try {
            const docente = await docentes.findByPk(id);
            if (!docente) {
                throw new Error('Docente no encontrado');
            }
            return await docente.update({ idPersona, especialidad, fechaContratacion, fechaTerminacion });
        } catch (error) {
            console.log("Error en servicio al actualizar docente");
        }
    }

    static async eliminarDocente(id) {
        try {
            const docente = await docentes.findByPk(id);
            if (!docente) {
                throw new Error('Docente no encontrado');
            }
            return await docente.destroy();
        } catch (error) {
            console.log("Error en servicio al eliminar docente");
        }
    }
}
module.exports = DocentesService;