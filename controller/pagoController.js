const PagoService = require('../services/pagoService');

class PagoController {
    static async GetAll(req, res) {
        try {
            const data = await PagoService.GetAll();
            res.json(data);
        } catch (error) {
            res.json({ message: "Error al listar " });
        }
    }

    static async Create(req, res) {
        const { idPersona, idCursosMatriculados, formaPago, monto, estado, fechaPago } = req.body;
        try {
            const data = await PagoService.Create(idPersona, idCursosMatriculados, formaPago, monto, estado, fechaPago);
            res.json(req.body);
        } catch (error) {
            res.json({ message: "Error al crear" });
        }
    }

    static async Update(req, res) {
        const { id } = req.params;
        const { idPersona, idCursosMatriculados, formaPago, monto, estado, fechaPago } = req.body;
        try {
            const data = await PagoService.Update(idPersona, idCursosMatriculados, formaPago, monto, estado, fechaPago);
            res.json(data);
        } catch (error) {
            res.json({ message: "Error al actualizar " });
        }
    }

    static async Delete(req, res) {
        const { id } = req.params;
        try {
            await PagoService.Delete(id);
            res.json({mensaje:"Eliminado exitosamente"})
        } catch (error) {
            res.json({ message: "Error al eliminar " });
        }
    }

    static async GetForId(req, res) {
        const { id } = req.params;
        try {
            await PagoService.GetForId(id);
            res.json({ mensaje: "eliminado exitosamente" });
        } catch (error) {
            res.json({ message: "Error al eliminar " });
        }
    }
    
}
module.exports = PagoController;