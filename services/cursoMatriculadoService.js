const {cursomatriculado}= require('../models');

class MatricularCursoService {
    static async listarMatriculas() {
        try {
            return await cursomatriculado.findAll();
        } catch (error) {
            throw new Error("Error al listar matrículas: " + error);
        }
    }

    static async crearMatricula(idOfertaCurso, personaInscrita) {
        try {
            return await cursomatriculado.create({ 
                id_curso_oferta: idOfertaCurso,
                id_persona: personaInscrita,
                estado: 'PreInscrito',
                resultado: 'Pendiente'
            });
        } catch (error) {
            throw new Error("Error al crear matrícula: " + error.message);
        }
    }

    static async actualizarMatricula(id, data) {
        try {
            const matricula = await cursomatriculado.findByPk(id);
            if (!matricula) {
                throw new Error("Matrícula no encontrada");
            }
            // No mapping needed, controller now sends snake_case keys in the data object
            return await matricula.update(data);
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

    static async obtenerModulosPorPersona(id_persona, id_curso_oferta){
        try {
      const matricula = await cursomatriculado.findOne({
        where: {
          id_persona,
          id_curso_oferta,
          estado: 'Activo'
        },
        include: [
          {
            model: require('../models').ofertacurso,
            as: 'curso', // alias definido en la relación cursomatriculado → ofertacurso
            include: [
              {
                model: require('../models').curso,
                as: 'curso', // alias ofertacurso → curso
                include: [
                  {
                    model: require('../models').modulo,
                    as: 'modulos' // alias curso → modulos
                  }
                ]
              }
            ]
          }
        ]
      });

      if (!matricula) return null;

      // Respuesta simplificada: solo módulos del curso
      return {
        curso: matricula.curso?.curso?.nombre_curso,
        modulos: matricula.curso?.curso?.modulos?.map(mod => ({
          id: mod.id,
          nombre: mod.nombre
        })) || []
      };
    } catch (error) {
      throw new Error('Error al obtener módulos del curso: ' + error.message);
    }
  }
    
}

module.exports = MatricularCursoService;