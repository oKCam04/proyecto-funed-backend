const {docente} = require('../models');

class DocentesService {
    static async listarDocentes() {
        try {
            return await docente.findAll();
        } catch (error) {
            console.log("Error en servicio al listar docentes");
            
        }
    }

    static async crearDocente(idPersona, especialidad, fechaContratacion, fechaTerminacion) {
        try {
            return await docente.create({ idPersona, especialidad, fechaContratacion, fechaTerminacion });
        } catch (error) {
            console.log("Error en servicio al crear docente");
        }
    }

    static async actualizarDocente(id, idPersona, especialidad, fechaContratacion, fechaTerminacion) {
        try {
            const docentes = await docente.findByPk(id);
            if (!docentes) {
                throw new Error('Docente no encontrado');
            }
            await docentes.update({ idPersona, especialidad, fechaContratacion, fechaTerminacion });
            return docentes;
        } catch (error) {
            console.log("Error en servicio al actualizar docente"+error.message);
        }
    }

    static async eliminarDocente(id) {
        try {
            const docentes = await docente.findByPk(id);
            if (!docentes) {
                throw new Error('Docente no encontrado');
            }
            return await docentes.destroy();
        } catch (error) {
            console.log("Error en servicio al eliminar docente");
        }
    }
}
module.exports = DocentesService;