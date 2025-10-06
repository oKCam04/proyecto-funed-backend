const { modulodocente, modulo, docente, persona } = require('../models');

class CalificacionesService {
  static async listarPorOfertaCurso(id_oferta_curso) {
    try {
      const registros = await modulodocente.findAll({
        where: { id_oferta_curso },
        include: [
          {
            model: modulo,
            as: 'modulo',
            attributes: ['id', 'nombre'],
          },
          {
            model: docente,
            as: 'docente',
            attributes: ['id', 'id_persona'],
            include: [
              {
                model: persona,
                as: 'persona',
                attributes: ['id', 'nombre', 'apellido'],
              },
            ],
          },
        ],
      });

      return registros.map((r) => ({
        id: r.id,
        id_oferta_curso: r.id_oferta_curso,
        resultado: r.resultado,
        modulo: r.modulo ? { id: r.modulo.id, nombre: r.modulo.nombre } : null,
        docente: r.docente
          ? {
              id: r.docente.id,
              nombre: r.docente.persona
                ? `${r.docente.persona.nombre} ${r.docente.persona.apellido}`
                : null,
            }
          : null,
      }));
    } catch (error) {
      throw new Error('Error al obtener calificaciones por oferta de curso: ' + error.message);
    }
  }
}

module.exports = CalificacionesService;