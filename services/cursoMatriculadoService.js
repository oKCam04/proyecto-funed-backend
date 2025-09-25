const {cursomatriculado}= require('../models');

class MatricularCursoService {
    static async listarMatriculas() {
        try {
            return await cursomatriculado.findAll();
        } catch (error) {
            throw new Error("Error al listar matrículas: " + error);
        }
    }

    static async crearMatricula(idOfertaCurso, titulo, ofertas, fechaInicioInscripcion, fechaFinInscripcion, personaInscrita) {
        try {
            return await cursomatriculado.create({ idOfertaCurso, titulo, ofertas, fechaInicioInscripcion, fechaFinInscripcion, personaInscrita });
        } catch (error) {
            throw new Error("Error al crear matrícula: " + error.message);
        }
    }

    static async actualizarMatricula(id, idOfertaCurso, titulo, ofertas, fechaInicioInscripcion, fechaFinInscripcion, personaInscrita) {
        try {
            const matricula = await cursomatriculado.findByPk(id);
            if (!matricula) throw new Error("Matrícula no encontrada");
            return await matricula.update({ idOfertaCurso, titulo, ofertas, fechaInicioInscripcion, fechaFinInscripcion, personaInscrita });
        } catch (error) {
            throw new Error("Error al actualizar matrícula: " + error.message);
        }
    }

    static async eliminarMatricula(id) {
        try {
            const matricula = await cursomatriculado.findByPk(id);
            if (!matricula) throw new Error("Matrícula no encontrada");
            return await matricula.destroy();
        } catch (error) {
            throw new Error("Error al eliminar matrícula: " + error.message);
        }
    }

    static async cursoMatriculadoPersona(id_persona){
        try{
           const matriculas = await cursomatriculado.findAll({
            where: {
                id_persona: id_persona,
                estado: 'Activo'
            },
            include: [
                {
                model: require('../models').ofertacurso, // tu modelo ofertacurso
                as: 'curso', // alias definido en la asociación
                include: [
                    {
                    model: require('../models').curso, // tu modelo curso
                    as: 'curso'
                    }
                ]
                }
            ]
            })

             return matriculas.map((m) => ({
                idMatricula: m.id,
                estado: m.estado,
                resultado: m.resultado,
                idPersona: m.id_persona,

                // Oferta del curso
                idOferta: m.curso?.id,
                codigo: m.curso?.codigo_curso,
                fechaInicio: m.curso?.fecha_inicio_curso,
                fechaFin: m.curso?.fecha_fin_curso,
                horario: m.curso?.horario,
                cupos: m.curso?.cupos,
                precio: m.curso?.precio,
                foto: m.curso?.foto,

                // Datos del curso base
                idCurso: m.curso?.curso?.id,
                nombre: m.curso?.curso?.nombre_curso,
                duracion: m.curso?.curso?.duracion,
                temario: m.curso?.curso?.temario,
                tipo: m.curso?.curso?.tipo_curso,
                }));
        }catch(error){
            throw new Error("Error al crear matrícula: " + error.message);
        }
    }
}

module.exports = MatricularCursoService;