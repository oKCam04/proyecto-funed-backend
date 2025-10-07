const { modulo, notas_modulo, cursomatriculado } = require('../models');

class CalificacionesService {
  
  
  static async listarNotasModuloPorEstudianteOferta(id_persona, id_oferta_curso) {
    try {
      const matricula = await cursomatriculado.findOne({
        where: { id_persona, id_curso_oferta: id_oferta_curso },
      });

      if (!matricula) return [];

      const notas = await notas_modulo.findAll({
        where: { id_curso_matriculado: matricula.id },
        include: [
          {
            model: modulo,
            as: 'modulo',
            attributes: ['id', 'nombre'],
          },
        ],
      });

      return notas.map((n) => ({
        id: n.id,
        id_curso_matriculado: n.id_curso_matriculado,
        id_persona: matricula.id_persona,
        id_oferta_curso: matricula.id_curso_oferta,
        modulo: n.modulo ? { id: n.modulo.id, nombre: n.modulo.nombre } : null,
        estado: n.estado,
        fecha_registro: n.fecha_registro,
      }));
    } catch (error) {
      throw new Error('Error al obtener notas por estudiante y oferta de curso: ' + error.message);
    }
  }
}

module.exports = CalificacionesService;