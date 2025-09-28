const { pago } = require('../models');

class PagoService {
    static async GetAll() {
        try {
            return await pago.findAll();
        } catch (error) {
            console.log("Error en servicio al listar pagos:", error.message);
            throw error;
        }
    }

    static async Create(id_persona, id_curso_matriculado, forma_pago, monto, estado, fecha_pago) {
        try {
            return await pago.create({ id_persona, id_curso_matriculado, forma_pago, monto, estado, fecha_pago });
        } catch (error) {
            console.log("Error en servicio al crear pago:", error.message);
            throw error;
        }
    }

    static async Update(id, cambios) {
        try {
            const datos = await pago.findByPk(id);
            if (!datos) {
                throw new Error(`Pago con id=${id} no encontrado`);
            }
            return await datos.update(cambios);
        } catch (error) {
            console.log("Error en servicio al actualizar pago:", error.message);
            throw error;
        }
    }

    static async Delete(id) {
        try {
            const datos = await pago.findByPk(id);
            if (!datos) {
                throw new Error(`Pago con id=${id} no encontrado`);
            }
            return await datos.destroy();
        } catch (error) {
            console.log("Error en servicio al eliminar pago:", error.message);
            throw error;
        }
    }

    static async GetForId(id) {
        try {
            const datos = await pago.findByPk(id);
            if (!datos) {
                throw new Error(`Pago con id=${id} no encontrado`);
            }
            return datos;
        } catch (error) {
            console.log("Error en servicio al buscar pago por ID:", error.message);
            throw error;
        }
    }
}; 

module.exports = PagoService;
