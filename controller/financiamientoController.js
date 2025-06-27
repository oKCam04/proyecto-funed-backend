const FinanciamientoService = require("../services/financiamientoService");

class FinanciamientoController {
    static async listarFinanciamiento(req, res) {
        try {
            const financiamientoLista = await FinanciamientoService.listarFinanciamiento();
            res.json(financiamientoLista);
        } catch (error) {
            res.json({ message: "Error al listar financiamiento" });
        }
    }

    static async crearFinanciamiento(req, res) {
        const { idPago, cuotas, valorFinal, valorAbonado, numeroCuota, estado } = req.body;
        try {
            const nuevoFinanciamiento = await FinanciamientoService.crearFinanciamiento(idPago, cuotas, valorFinal, valorAbonado, numeroCuota, estado);
            res.json(nuevoFinanciamiento);
        } catch (error) {
            res.json({ message: "Error al crear financiamiento" });
        }
    }

    static async actualizarFinanciamiento(req, res) {
        const { id } = req.params;
        const { idPago, cuotas, valorFinal, valorAbonado, numeroCuota, estado } = req.body;
        try {
            const financiamientoActualizado = await FinanciamientoService.actualizarFinanciamiento(id, idPago, cuotas, valorFinal, valorAbonado, numeroCuota, estado);
            res.json(financiamientoActualizado);
        } catch (error) {
            res.json({ message: "Error al actualizar financiamiento" });
        }
    }

    static async eliminarFinanciamiento(req, res) {
        const { id } = req.params;
        try {
            await FinanciamientoService.eliminarFinanciamiento(id);
            res.json({ mensaje: "Financiamiento eliminado exitosamente" });
        } catch (error) {
            res.json({ message: "Error al eliminar financiamiento" });
        }
    }
}

module.exports = FinanciamientoController; 