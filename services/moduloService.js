const { modulo } = require('../models');

class ModuloService {
    static async listarModulos() {
        try {
            return await modulo.findAll();
        } catch (error) {
            throw new Error("Error al listar modulos: " + error.message);
        }
    }

    static async crearModulo(moduloData) {
        try {
            if (Array.isArray(moduloData)) {
                return await modulo.bulkCreate(moduloData);
            }
            return await modulo.create(moduloData);
        } catch (error) {
            throw new Error("Error al crear modulo: " + error.message);
        }
    }

    static async actualizarModulo(id, data) {
        try {
            const modulos = await modulo.findByPk(id);
            if (!modulos) {
                throw new Error("Modulo no encontrado");
            }
            return await modulos.update(data);
        } catch (error) {
            throw new Error("Error al actualizar modulo: " + error.message);
        }
    }

    static async eliminarModulo(id) {
        try {
            const modulos = await modulo.findByPk(id);
            if (!modulos) {
                throw new Error("Modulo no encontrado");
            }
            return await modulos.destroy();
        } catch (error) {
            throw new Error("Error al eliminar modulo: " + error.message);
        }
    }

    static async buscarModuloPorId(id) {
        try {
            const moduloEncontrado = await modulo.findByPk(id);
            if (!moduloEncontrado) {
                throw new Error("Modulo no encontrado");
            }
            return moduloEncontrado;
        } catch (error) {
            throw new Error("Error al buscar modulo por ID: " + error.message);
        }
    }
}

module.exports = ModuloService;