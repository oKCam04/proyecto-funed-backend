const {cursos,docentes} = require('../models');

class CursosService {
    static async listarCursos() {
        try {
            return await cursos.findAll(
                {include:{model: docentes,as: 'docentes', attributes:['especialidad']}}
            );
            
        } catch (error) {
            console.log("Error en servicio al listar cursos");
        }
    }

    static async crearCurso(idDocente, nombreCurso, inicio, finalizacion, duracion, temario, inscripcion, valorTotal, grupo, tipoCurso) {
        try {
            return await cursos.create({ idDocente, nombreCurso, inicio, finalizacion, duracion, temario, inscripcion, valorTotal, grupo, tipoCurso });
        } catch (error) {
            console.log("Error en servicio al crear curso");
            console.log(error);
        }
    }

    static async actualizarCurso(id, idDocente, nombreCurso, inicio, finalizacion, duracion, temario, inscripcion, valorTotal, grupo, tipoCurso) {
        try {
            const curso = await cursos.findByPk(id);
            if (!curso) {
                throw new Error('Curso no encontrado');
            }
            return await curso.update({ idDocente, nombreCurso, inicio, finalizacion, duracion, temario, inscripcion, valorTotal, grupo, tipoCurso});
        } catch (error) {
            console.log("Error en servicio al actualizar curso");
        }
    }

    static async eliminarCurso(id) {
        try {
            const curso = await cursos.findByPk(id);
            if (!curso) {
                throw new Error('Curso no encontrado');
            }
            return await curso.destroy();
        } catch (error) {
            console.log("Error en servicio al eliminar curso");
        }
    }
}
module.exports = CursosService;