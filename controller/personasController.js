const PersonasService = require("../services/personasService");
const UsuarioService = require("../services/usuarioServices");
const EmailService = require("../services/emailService");

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
        const { nombre, apellido, numero_identificacion, tipo_identificacion, fecha_nacimiento, telefono, correo, rol } = req.body;
        try {
            const nuevaPersona = await PersonasService.crearPersona(nombre, apellido, numero_identificacion, tipo_identificacion, fecha_nacimiento, telefono, correo, rol);

            // Auto-crear usuario para login: email = correo, password = numero_identificacion
            try {
                await UsuarioService.register(nuevaPersona.id, correo, numero_identificacion);
            } catch (e) {
                console.warn('[PersonasController] No se pudo auto-crear usuario:', e.message);
            }

            // Enviar correo con credenciales
            try {
                await EmailService.sendWelcomeOnRegistration({
                    to: correo,
                    nombre,
                    email: correo,
                    numero_identificacion
                });
            } catch (e) {
                console.warn('[PersonasController] Envío de correo falló:', e.message);
            }

            res.json(nuevaPersona);
        } catch (error) {
            res.json({ message: "Error al crear persona" });
        }
    }

    static async actualizarPersona(req, res) {
        const { id } = req.params;
        const { nombre, apellido, numero_identificacion, tipo, fecha, telefono, correo, rol } = req.body;
        try {
            const personaActualizada = await PersonasService.actualizarPersona(id, nombre, apellido, numero_identificacion, tipo, fecha, telefono, correo, rol);
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

    static async buscarPersonaPorId(req, res) {
        const { id } = req.params;
        try {
            const persona = await PersonasService.buscarPersonaPorId(id);
            res.json(persona);
        } catch (error) {
            res.json({ message: "Error al buscar persona por ID" });
        }
    }

    // Reenvía el correo de bienvenida con credenciales
    static async enviarCorreoBienvenida(req, res) {
        const { id } = req.params;
        try {
            const persona = await PersonasService.buscarPersonaPorId(id);
            if (!persona) {
                return res.status(404).json({ message: 'Persona no encontrada' });
            }

            const result = await EmailService.sendWelcomeOnRegistration({
                to: persona.correo,
                nombre: persona.nombre,
                email: persona.correo,
                numero_identificacion: persona.numero_identificacion,
            });

            if (result.sent) {
                return res.json({ message: 'Correo de bienvenida enviado', messageId: result.messageId });
            }
            return res.status(500).json({ message: 'No se pudo enviar el correo', reason: result.reason });
        } catch (error) {
            res.status(500).json({ message: 'Error al enviar correo de bienvenida', error: error.message });
        }
    }
}
module.exports = PersonasController;