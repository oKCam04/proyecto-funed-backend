const {persona}=require('../models');

class PersonasService {
    static async listarPersonas() {
        try {
            const personasList = await persona.findAll();
            return personasList;
        } catch (error) {
            console.log("Error en servicio")
            
        }
    }
    static async crearPersona(nombre, apellido, numeroIdentificacion, tipoIdentificacion, fechaNacimiento, telefono, correo, rol) {
        try{
            return await persona.create({nombre, apellido, numeroIdentificacion , tipoIdentificacion, fechaNacimiento, telefono, correo, rol})
        }
        catch (error){
            console.log("Error en servicio al crear persona")
            
        }
        }
    static async actualizarPersona(id, nombre, apellido, numeroIdentificacion, tipo, fecha, telefono, correo, rol) {
        try {
            const persona = await persona.findByPk(id);
            if (!persona) {
                throw new Error('Persona no encontrada');
            }
            return await persona.update({ nombre, apellido, numeroIdentificacion, tipo, fecha, telefono, correo, rol });
        } catch (error) {
            console.log("Error en servicio al actualizar persona")
            console.log(error);
        }
    }
    static async eliminarPersona(id) {
        try {
            const persona = await persona.findByPk(id);
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