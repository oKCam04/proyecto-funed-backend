const { tecnicos } = require('../models');

class TecnicosService {
    static async listarTecnicos() {
        try {
            return await tecnicos.findAll();
        } catch (error) {
            console.log("Error en servicio al listar tecnicos");
        }
    }
    static async crearTecnico(idCurso, reciboPublico, serologia, certificadoEstudio, foto3x4, certificadoEps) {
        try {
            return await tecnicos.create({ idCurso, reciboPublico, serologia, certificadoEstudio, foto3x4, certificadoEps });
        } catch (error) {
            console.log("Error en servicio al crear tecnico");
        }
    }
    static async actualizarTecnico(id, idCurso, reciboPublico, serologia, certificadoEstudio, foto3x4, certificadoEps) {
        try {
            const tecnico = await tecnicos.findByPk(id);
            if (!tecnico) throw new Error('Tecnico no encontrado');
            return await tecnico.update({ idCurso, reciboPublico, serologia, certificadoEstudio, foto3x4, certificadoEps });
        } catch (error) {
            console.log("Error en servicio al actualizar tecnico");
        }
    }
    static async eliminarTecnico(id) {
        try {
            const tecnico = await tecnicos.findByPk(id);
            if (!tecnico) throw new Error('Tecnico no encontrado');
            return await tecnico.destroy();
        } catch (error) {
            console.log("Error en servicio al eliminar tecnico");
        }
    }
}

module.exports = TecnicosService; 