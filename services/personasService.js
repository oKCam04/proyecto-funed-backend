const {personas}=require('../models');

class PersonasService {
    static async listarPersonas() {
        try {
            const personasList = await personas.findAll();
            return personasList;
        } catch (error) {
            console.log("Error en servicio")
        }
    }
    static async crearPersona(nombre, apellido, numero_identificacion, tipo, fecha, telefono, correo) {
        try{
            return await personas.create({nombre, apellido, numero_identificacion, tipo, fecha, telefono, correo})
        }
        catch (error){
            console.log("Error en servicio al crear persona")
        }
        }
    static async actualizarPersona(id, nombre, apellido, numero_identificacion, tipo, fecha, telefono, correo) {
        try {
            const persona = await personas.findByPk(id);
            if (!persona) {
                throw new Error('Persona no encontrada');
            }
            return await persona.update({ nombre, apellido, numero_identificacion, tipo, fecha, telefono, correo });
        } catch (error) {
            console.log("Error en servicio al actualizar persona")
        }
    }
    static async eliminarPersona(id) {
        try {
            const persona = await personas.findByPk(id);
            if (!persona) {
                throw new Error('Persona no encontrada');
            }
            return await persona.destroy();
        } catch (error) {
            console.log("Error en servicio al eliminar persona")
        }
    }
}

module.exports = PersonasService;