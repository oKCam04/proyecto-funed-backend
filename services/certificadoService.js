const {certificado} = require('../models');

class CertificadoService {
    static async GetAll() {
        try {
            return await certificado.findAll();
        } catch (error) {
            console.log("Error en servicio al listar cursos");
        }
    }

    static async Create(nombreCurso, duracion, temario, tipoCurso) {
        try {
            return await certificado.create({ nombreCurso, duracion, temario, tipoCurso });
        } catch (error) {
            console.log("Error en servicio al crear certificado");
            
        }
    }

    static async Update(id, nombreCurso, duracion, temario, tipCurso) {
        try {
            const cursoEncontrado = await certificado.findByPk(id);
            if (!cursoEncontrado) {
                throw new Error('Curso no encontrado');
            }
            return await cursoEncontrado.update({ nombreCurso, duracion, temario, tipCurso });
        } catch (error) {
            console.log("Error en servicio al actualizar certificado");
        }
    }

    static async Delete(id) {
        try {
            const cursoEncontrado = await certificado.findByPk(id);
            if (!cursoEncontrado) {
                throw new Error('Curso no encontrado');
            }
            return await cursoEncontrado.destroy();
        } catch (error) {
            console.log("Error en servicio al eliminar certificado");
        }
    }
    static async GetForId(id) {
        try {
            const cursoEncontrado = await certificado.findByPk(id);
            if (!cursoEncontrado) {
                throw new Error('Curso no encontrado');
            }
            return cursoEncontrado;
        } catch (error) {
            console.log("Error en servicio al buscar certificado por ID");
            
        }
    }
 }
module.exports = CertificadoService;