const { modulo, notas_modulo, cursomatriculado, persona, ofertacurso } = require('../models');

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

  // Crear o actualizar (upsert) nota por módulo para una persona en una oferta
  static async upsertNotaModulo({ id_persona, id_oferta_curso, id_modulo, estado }) {
    try {
      const matricula = await cursomatriculado.findOne({
        where: { id_persona, id_curso_oferta: id_oferta_curso },
      });
      if (!matricula) throw new Error('Matrícula no encontrada para la persona y oferta dadas');

      const now = new Date();
      const [nota, created] = await notas_modulo.findOrCreate({
        where: { id_curso_matriculado: matricula.id, id_modulo },
        defaults: { estado, fecha_registro: now },
      });

      if (!created) {
        // Actualizar estado y fecha si ya existía
        nota.estado = estado;
        nota.fecha_registro = now;
        await nota.save();
      }

      return {
        id: nota.id,
        id_curso_matriculado: matricula.id,
        id_persona: matricula.id_persona,
        id_oferta_curso: matricula.id_curso_oferta,
        id_modulo,
        estado: nota.estado,
        fecha_registro: nota.fecha_registro,
      };
    } catch (error) {
      throw new Error('Error al crear/actualizar nota de módulo: ' + error.message);
    }
  }

  // Actualizar estado de una nota por ID
  static async actualizarNota(id, cambios = {}) {
    try {
      const nota = await notas_modulo.findByPk(id);
      if (!nota) return null;
      if (cambios.estado) nota.estado = cambios.estado;
      nota.fecha_registro = new Date();
      await nota.save();
      return nota;
    } catch (error) {
      throw new Error('Error al actualizar nota de módulo: ' + error.message);
    }
  }

  // Eliminar una nota por ID
  static async eliminarNota(id) {
    try {
      const nota = await notas_modulo.findByPk(id);
      if (!nota) return false;
      await nota.destroy();
      return true;
    } catch (error) {
      throw new Error('Error al eliminar nota de módulo: ' + error.message);
    }
  }

  // Listar notas por módulo y oferta, con datos de persona
  static async listarNotasPorModuloOferta(id_modulo, id_oferta_curso) {
    try {
      // Buscar todas las matrículas para la oferta
      const matriculas = await cursomatriculado.findAll({
        where: { id_curso_oferta: id_oferta_curso },
        include: [{ model: persona, as: 'persona', attributes: ['id', 'nombre', 'apellido', 'correo', 'telefono', 'tipoIdentificacion'] }],
      });
      const matriculaIds = matriculas.map(m => m.id);
      if (matriculaIds.length === 0) return [];

      const notas = await notas_modulo.findAll({
        where: { id_modulo, id_curso_matriculado: matriculaIds },
      });

      // Mapear por id_curso_matriculado para rápido acceso
      const notasMap = new Map();
      for (const n of notas) notasMap.set(n.id_curso_matriculado, n);

      return matriculas.map(m => ({
        id_nota: notasMap.get(m.id)?.id || null,
        id_persona: m.id_persona,
        persona: m.persona ? {
          id: m.persona.id,
          nombre: m.persona.nombre,
          apellido: m.persona.apellido,
          correo: m.persona.correo,
          telefono: m.persona.telefono,
          tipoIdentificacion: m.persona.tipoIdentificacion,
        } : null,
        id_oferta_curso,
        id_modulo,
        estado: notasMap.get(m.id)?.estado || 'Pendiente',
        fecha_registro: notasMap.get(m.id)?.fecha_registro || null,
      }));
    } catch (error) {
      throw new Error('Error al listar notas por módulo y oferta: ' + error.message);
    }
  }

  // Listado general: todas las notas de módulo con datos básicos
  static async listarTodasNotasModulo() {
    try {
      const registros = await notas_modulo.findAll({
        include: [
          { model: modulo, as: 'modulo', attributes: ['id', 'nombre'] },
          {
            model: cursomatriculado,
            as: 'matricula',
            attributes: ['id', 'id_persona', 'id_curso_oferta'],
            include: [
              { model: persona, as: 'persona', attributes: ['id', 'nombre', 'apellido', 'correo', 'telefono', 'tipo_identificacion'] },
              { model: ofertacurso, as: 'curso', attributes: ['id', 'codigo_curso', 'id_curso'] },
            ],
          },
        ],
        order: [['fecha_registro', 'DESC']],
      });

      return (registros || []).map((n) => ({
        id: n.id,
        id_modulo: n.id_modulo,
        modulo: n.modulo ? { id: n.modulo.id, nombre: n.modulo.nombre } : null,
        id_curso_matriculado: n.id_curso_matriculado,
        id_persona: n.matricula?.id_persona || null,
        persona: n.matricula?.persona ? {
          id: n.matricula.persona.id,
          nombre: n.matricula.persona.nombre,
          apellido: n.matricula.persona.apellido,
          correo: n.matricula.persona.correo,
          telefono: n.matricula.persona.telefono,
          tipoIdentificacion: n.matricula.persona.tipoIdentificacion,
        } : null,
        id_oferta_curso: n.matricula?.id_curso_oferta || null,
        oferta_curso: n.matricula?.curso ? {
          id: n.matricula.curso.id,
          codigo_curso: n.matricula.curso.codigo_curso,
          id_curso: n.matricula.curso.id_curso,
        } : null,
        estado: n.estado,
        fecha_registro: n.fecha_registro,
      }));
    } catch (error) {
      throw new Error('Error al listar todas las notas de módulo: ' + error.message);
    }
  }

  static async obtenerNotaPorId(id) {
    try {
      const nota = await notas_modulo.findByPk(id, {
        include: [
          { model: modulo, as: 'modulo', attributes: ['id', 'nombre'] },
          {
            model: cursomatriculado,
            as: 'matricula',
            attributes: ['id', 'id_persona', 'id_curso_oferta'],
            include: [
              { model: persona, as: 'persona', attributes: ['id', 'nombre', 'apellido', 'correo', 'telefono', 'tipo_identificacion'] },
              { model: ofertacurso, as: 'curso', attributes: ['id', 'codigo_curso', 'id_curso'] },
            ],
          },
        ],
      });

      if (!nota) return null;

      return {
        id: nota.id,
        id_modulo: nota.id_modulo,
        modulo: nota.modulo ? { id: nota.modulo.id, nombre: nota.modulo.nombre } : null,
        id_curso_matriculado: nota.id_curso_matriculado,
        id_persona: nota.matricula?.id_persona || null,
        persona: nota.matricula?.persona
          ? {
              id: nota.matricula.persona.id,
              nombre: nota.matricula.persona.nombre,
              apellido: nota.matricula.persona.apellido,
              correo: nota.matricula.persona.correo,
              telefono: nota.matricula.persona.telefono,
              tipoIdentificacion: nota.matricula.persona.tipo_identificacion,
            }
          : null,
        id_oferta_curso: nota.matricula?.id_curso_oferta || null,
        oferta_curso: nota.matricula?.curso
          ? {
              id: nota.matricula.curso.id,
              codigo_curso: nota.matricula.curso.codigo_curso,
              id_curso: nota.matricula.curso.id_curso,
            }
          : null,
        estado: nota.estado,
        fecha_registro: nota.fecha_registro,
      };
    } catch (error) {
      console.error('Error obtenerNotaPorId:', error);
      throw error;
    }
  }
}

module.exports = CalificacionesService;