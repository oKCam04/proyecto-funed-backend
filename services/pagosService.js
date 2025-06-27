const { pagos } = require('../models');

class PagosService {
    static async listarPagos() {
        try {
            return await pagos.findAll();
        } catch (error) {
            console.log("Error en servicio al listar pagos");
        }
    }
    static async crearPago(idEstudiante, fechaPago, monto, metodoPago, financiamiento) {
        try {
            return await pagos.create({ idEstudiante, fechaPago, monto, metodoPago, financiamiento });
        } catch (error) {
            console.log("Error en servicio al crear pago");
        }
    }
    static async actualizarPago(id, idEstudiante, fechaPago, monto, metodoPago, financiamiento) {
        try {
            const pago = await pagos.findByPk(id);
            if (!pago) throw new Error('Pago no encontrado');
            return await pago.update({ idEstudiante, fechaPago, monto, metodoPago, financiamiento });
        } catch (error) {
            console.log("Error en servicio al actualizar pago");
        }
    }
    static async eliminarPago(id) {
        try {
            const pago = await pagos.findByPk(id);
            if (!pago) throw new Error('Pago no encontrado');
            return await pago.destroy();
        } catch (error) {
            console.log("Error en servicio al eliminar pago");
        }
    }
}

module.exports = PagosService; 