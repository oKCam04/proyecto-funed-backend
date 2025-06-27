const { cortos } = require('../models');

class CortosService {
    static async listarCortos() {
        try {
            return await cortos.findAll();
        } catch (error) {
            console.log("Error en servicio al listar cortos");
        }
    }
    static async crearCorto(idCurso, certificadoEstudio, documentoIdentidad) {
        try {
            return await cortos.create({ idCurso, certificadoEstudio, documentoIdentidad });
        } catch (error) {
            console.log("Error en servicio al crear corto");
        }
    }
    static async actualizarCorto(id, idCurso, certificadoEstudio, documentoIdentidad) {
        try {
            const corto = await cortos.findByPk(id);
            if (!corto) throw new Error('Corto no encontrado');
            return await corto.update({ idCurso, certificadoEstudio, documentoIdentidad });
        } catch (error) {
            console.log("Error en servicio al actualizar corto");
        }
    }
    static async eliminarCorto(id) {
        try {
            const corto = await cortos.findByPk(id);
            if (!corto) throw new Error('Corto no encontrado');
            return await corto.destroy();
        } catch (error) {
            console.log("Error en servicio al eliminar corto");
        }
    }
}

module.exports = CortosService; 