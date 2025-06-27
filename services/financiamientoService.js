const { financiamiento } = require('../models');

class FinanciamientoService {
    static async listarFinanciamiento() {
        try {
            return await financiamiento.findAll();
        } catch (error) {
            console.log("Error en servicio al listar financiamiento");
        }
    }
    static async crearFinanciamiento(idPago, cuotas, valorFinal, valorAbonado, numeroCuota, estado) {
        try {
            return await financiamiento.create({ idPago, cuotas, valorFinal, valorAbonado, numeroCuota, estado });
        } catch (error) {
            console.log("Error en servicio al crear financiamiento");
        }
    }
    static async actualizarFinanciamiento(id, idPago, cuotas, valorFinal, valorAbonado, numeroCuota, estado) {
        try {
            const financiamientoObj = await financiamiento.findByPk(id);
            if (!financiamientoObj) throw new Error('Financiamiento no encontrado');
            return await financiamientoObj.update({ idPago, cuotas, valorFinal, valorAbonado, numeroCuota, estado });
        } catch (error) {
            console.log("Error en servicio al actualizar financiamiento");
        }
    }
    static async eliminarFinanciamiento(id) {
        try {
            const financiamientoObj = await financiamiento.findByPk(id);
            if (!financiamientoObj) throw new Error('Financiamiento no encontrado');
            return await financiamientoObj.destroy();
        } catch (error) {
            console.log("Error en servicio al eliminar financiamiento");
        }
    }
}

module.exports = FinanciamientoService; 