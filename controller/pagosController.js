const PagosService = require("../services/pagosService");

class PagosController {
    static async listarPagos(req, res) {
        try {
            const pagosLista = await PagosService.listarPagos();
            res.json(pagosLista);
        } catch (error) {
            res.json({ message: "Error al listar pagos" });
        }
    }

    static async crearPago(req, res) {
        const { idEstudiante, fechaPago, monto, metodoPago, financiamiento } = req.body;
        try {
            const nuevoPago = await PagosService.crearPago(idEstudiante, fechaPago, monto, metodoPago, financiamiento);
            res.json(nuevoPago);
        } catch (error) {
            res.json({ message: "Error al crear pago" });
        }
    }

    static async actualizarPago(req, res) {
        const { id } = req.params;
        const { idEstudiante, fechaPago, monto, metodoPago, financiamiento } = req.body;
        try {
            const pagoActualizado = await PagosService.actualizarPago(id, idEstudiante, fechaPago, monto, metodoPago, financiamiento);
            res.json(pagoActualizado);
        } catch (error) {
            res.json({ message: "Error al actualizar pago" });
        }
    }

    static async eliminarPago(req, res) {
        const { id } = req.params;
        try {
            await PagosService.eliminarPago(id);
            res.json({ mensaje: "Pago eliminado exitosamente" });
        } catch (error) {
            res.json({ message: "Error al eliminar pago" });
        }
    }
}

module.exports = PagosController; 