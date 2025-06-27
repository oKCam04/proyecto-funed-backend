const { modulos } = require('../models');

class ModulosService {
    static async listarModulos() {
        try {
            return await modulos.findAll();
        } catch (error) {
            console.log("Error en servicio al listar modulos");
        }
    }
    static async crearModulo(idCurso, nombreModulo) {
        try {
            return await modulos.create({ idCurso, nombreModulo });
        } catch (error) {
            console.log("Error en servicio al crear modulo");
        }
    }
    static async actualizarModulo(id, idCurso, nombreModulo) {
        try {
            const modulo = await modulos.findByPk(id);
            if (!modulo) throw new Error('Modulo no encontrado');
            return await modulo.update({ idCurso, nombreModulo });
        } catch (error) {
            console.log("Error en servicio al actualizar modulo");
        }
    }
    static async eliminarModulo(id) {
        try {
            const modulo = await modulos.findByPk(id);
            if (!modulo) throw new Error('Modulo no encontrado');
            return await modulo.destroy();
        } catch (error) {
            console.log("Error en servicio al eliminar modulo");
        }
    }
}

module.exports = ModulosService; 