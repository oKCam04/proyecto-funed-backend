const {docente} = require('../models');

class DocentesService {
    static async listarDocentes() {
        try {
            return await docente.findAll();
        } catch (error) {
            console.log("Error en servicio al listar docentes");
            
        }
    }

    static async crearDocente(id_persona, especialidad, fecha_contratacion, fecha_terminacion) {
        try {
            return await docente.create({ id_persona, especialidad, fecha_contratacion, fecha_terminacion });
        } catch (error) {
            console.log("Error en servicio al crear docente"+error.message);
        }
    }

    static async actualizarDocente(id, id_persona, especialidad, fecha_contratacion, fecha_terminacion) {
        try {
            const docentes = await docente.findByPk(id);
            if (!docentes) {
                throw new Error('Docente no encontrado');
            }
            await docentes.update({ id_persona, especialidad, fecha_contratacion, fecha_terminacion });
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