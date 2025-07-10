const {curso} = require('../models');

class cursosService {
    static async listarCursos() {
        try {
            return await curso.findAll();
        } catch (error) {
            console.log("Error en servicio al listar cursos");
        }
    }

    static async crearCurso(nombreCurso, duracion, temario, tipoCurso) {
        try {
            return await curso.create({ nombreCurso, duracion, temario, tipoCurso });
        } catch (error) {
            console.log("Error en servicio al crear curso");
            
        }
    }

    static async actualizarCurso(id, nombreCurso, duracion, temario, tipCurso) {
        try {
            const cursoEncontrado = await curso.findByPk(id);
            if (!cursoEncontrado) {
                throw new Error('Curso no encontrado');
            }
            return await cursoEncontrado.update({ nombreCurso, duracion, temario, tipCurso });
        } catch (error) {
            console.log("Error en servicio al actualizar curso");
        }
    }

    static async eliminarCurso(id) {
        try {
            const cursoEncontrado = await curso.findByPk(id);
            if (!cursoEncontrado) {
                throw new Error('Curso no encontrado');
            }
            return await cursoEncontrado.destroy();
        } catch (error) {
            console.log("Error en servicio al eliminar curso");
        }
    }
    static async buscarCursoPorId(id) {
        try {
            const cursoEncontrado = await curso.findByPk(id);
            if (!cursoEncontrado) {
                throw new Error('Curso no encontrado');
            }
            return cursoEncontrado;
        } catch (error) {
            console.log("Error en servicio al buscar curso por ID");
            
        }
    }
 }
module.exports = cursosService;