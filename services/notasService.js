const { notas } = require('../models');

class NotasService {
    static async listarNotas() {
        try {
            return await notas.findAll();
        } catch (error) {
            console.log("Error en servicio al listar notas");
        }
    }
    static async crearNota(idEstudiante, idModulo, nota, fechaNota, estado) {
        try {
            return await notas.create({ idEstudiante, idModulo, nota, fechaNota, estado });
        } catch (error) {
            console.log("Error en servicio al crear nota");
        }
    }
    static async actualizarNota(id, idEstudiante, idModulo, nota, fechaNota, estado) {
        try {
            const notaObj = await notas.findByPk(id);
            if (!notaObj) throw new Error('Nota no encontrada');
            return await notaObj.update({ idEstudiante, idModulo, nota, fechaNota, estado });
        } catch (error) {
            console.log("Error en servicio al actualizar nota");
        }
    }
    static async eliminarNota(id) {
        try {
            const notaObj = await notas.findByPk(id);
            if (!notaObj) throw new Error('Nota no encontrada');
            return await notaObj.destroy();
        } catch (error) {
            console.log("Error en servicio al eliminar nota");
        }
    }
}

module.exports = NotasService; 