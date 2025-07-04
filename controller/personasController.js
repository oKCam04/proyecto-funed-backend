const PersonasService = require("../services/personasService");

class PersonasController {
    static async listarPersonas(req, res) {
        try {
            const personasLista = await PersonasService.listarPersonas();
            res.json(personasLista);
        } catch (error) {
            res.json({ message: "Error al listar personas" });
        }
    }

    static async crearPersona(req, res) {
        const { nombre, apellido, numeroIdentificacion, tipoIdentificacion, fechaNacimiento, telefono, correo } = req.body;
        try {
            const nuevaPersona = await PersonasService.crearPersona(nombre, apellido, numeroIdentificacion, tipoIdentificacion, fechaNacimiento, telefono, correo);
            res.json(nuevaPersona);
        } catch (error) {
            res.json({ message: "Error al crear persona" });
        }
    }

    static async actualizarPersona(req, res) {
        const { id } = req.params;
        const { nombre, apellido, numero_identificacion, tipo, fecha, telefono, correo } = req.body;
        try {
            const personaActualizada = await PersonasService.actualizarPersona(id, nombre, apellido, numero_identificacion, tipo, fecha, telefono, correo);
            res.json(req.body);
        } catch (error) {
            res.json({ message: "Error al actualizar persona" });
        }
    }

    static async eliminarPersona(req, res) {
        const { id } = req.params;
        try {
            await PersonasService.eliminarPersona(id);
            res.json({mensaje:"Usuario eliminado exitosamente"})
        } catch (error) {
            res.json({ message: "Error al eliminar persona" });
        }
    }
}
module.exports = PersonasController;