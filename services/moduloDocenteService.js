const { modulodocente, modulo, docente, persona } = require('../models');

class ModuloDocenteService {
  static async listarPorOfertaCurso(id_oferta_curso) {
    try {
      const registros = await modulodocente.findAll({
        where: { id_oferta_curso },
        attributes: ['id', 'id_oferta_curso', 'id_modulo', 'id_docente'],
        include: [
          { model: modulo, as: 'modulo', attributes: ['id', 'nombre'] },
          {
            model: docente,
            as: 'docente',
            attributes: ['id', 'id_persona'],
            include: [{ model: persona, as: 'persona', attributes: ['id', 'nombre', 'apellido'] }]
          }
        ]
      });

      // Mapear respuesta a estructura clara
      return registros.map(r => ({
        id: r.id,
        id_oferta_curso: r.id_oferta_curso,
        id_modulo: r.id_modulo,
        id_docente: r.id_docente,
        modulo: r.modulo ? { id: r.modulo.id, nombre: r.modulo.nombre } : null,
        docente: r.docente
          ? {
              id: r.docente.id,
              persona: r.docente.persona
                ? { id: r.docente.persona.id, nombre: r.docente.persona.nombre, apellido: r.docente.persona.apellido }
                : null
            }
          : null,
        docenteNombre: r.docente?.persona ? `${r.docente.persona.nombre} ${r.docente.persona.apellido}` : null
      }));
    } catch (error) {
      throw new Error('Error al listar módulo-docente por oferta de curso: ' + error.message);
    }
  }

  static async crearAsignacion({ id_modulo, id_docente, id_oferta_curso }) {
    try {
      // Crear registro
      const created = await modulodocente.create({
        id_modulo,
        id_docente,
        id_oferta_curso,
        resultado: 'Pendiente',
      });

      // Traer con include para devolver datos amigables
      const r = await modulodocente.findByPk(created.id, {
        attributes: ['id', 'id_oferta_curso', 'id_modulo', 'id_docente'],
        include: [
          { model: modulo, as: 'modulo', attributes: ['id', 'nombre'] },
          {
            model: docente,
            as: 'docente',
            attributes: ['id', 'id_persona'],
            include: [{ model: persona, as: 'persona', attributes: ['id', 'nombre', 'apellido'] }]
          }
        ]
      });

      return {
        id: r.id,
        id_oferta_curso: r.id_oferta_curso,
        id_modulo: r.id_modulo,
        id_docente: r.id_docente,
        modulo: r.modulo ? { id: r.modulo.id, nombre: r.modulo.nombre } : null,
        docente: r.docente
          ? {
              id: r.docente.id,
              persona: r.docente.persona
                ? { id: r.docente.persona.id, nombre: r.docente.persona.nombre, apellido: r.docente.persona.apellido }
                : null
            }
          : null,
        docenteNombre: r.docente?.persona ? `${r.docente.persona.nombre} ${r.docente.persona.apellido}` : null
      };
    } catch (error) {
      throw new Error('Error al crear asignación módulo-docente: ' + error.message);
    }
  }
}

module.exports = ModuloDocenteService;