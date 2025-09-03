const {pago} = require('../models');

class PagoService {
    static async GetAll() {
        try {
            return await pago.findAll();
        } catch (error) {
            console.log("Error en servicio al listar cursos");
        }
    }

    static async Create(idPersona, idCursosMatriculados, formaPago, monto, estado, fechaPago) {
        try {
            return await pago.create({ idPersona, idCursosMatriculados, formaPago, monto, estado, fechaPago });
        } catch (error) {
            console.log("Error en servicio al crear"+error);
            
        }
    }

    static async Update(id, nombreCurso, duracion, temario, tipCurso) {
        try {
            const datos = await pago.findByPk(id);
            if (!datos) {
                throw new Error('Curso no encontrado');
            }
            return await datos.update({ nombreCurso, duracion, temario, tipCurso });
        } catch (error) {
            console.log("Error en servicio al actualizar pago");
        }
    }

    static async Delete(id) {
        try {
            const datos = await pago.findByPk(id);
            if (!datos) {
                throw new Error('Curso no encontrado');
            }
            return await datos.destroy();
        } catch (error) {
            console.log("Error en servicio al eliminar pago");
        }
    }
    static async GetForId(id) {
        try {
            const datos = await pago.findByPk(id);
            if (!datos) {
                throw new Error('Curso no encontrado');
            }
            return datos;
        } catch (error) {
            console.log("Error en servicio al buscar pago por ID");
            
        }
    }
 }
module.exports = PagoService;