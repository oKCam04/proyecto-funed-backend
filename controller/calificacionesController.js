const CalificacionesService = require('../services/calificacionesService');

class CalificacionesController {
  static async obtenerNotasPorEstudianteOferta(req, res) {
    const { id_persona, id_oferta_curso } = req.params;
    try {
      const notas = await CalificacionesService.listarNotasModuloPorEstudianteOferta(id_persona, id_oferta_curso);
      res.status(200).json({ mensaje: 'Notas por módulo obtenidas correctamente', notas });
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al obtener notas por estudiante y oferta de curso', error: error.message });
    }
  }

  static async upsertNotaModulo(req, res) {
    try {
      const { id_persona, id_oferta_curso, id_modulo, estado } = req.body || {};
      if (!id_persona || !id_oferta_curso || !id_modulo || !estado) {
        return res.status(400).json({ mensaje: 'Faltan parámetros: id_persona, id_oferta_curso, id_modulo, estado' });
      }
      // Normalizar estado a enum esperado
      const estadoMap = { 'Aprobó': 'Aprobó', 'Aprobo': 'Aprobó', 'aprobó': 'Aprobó', 'aprobado': 'Aprobó', 'Aprobado': 'Aprobó', 'Desaprobó': 'Desaprobó', 'Desaprobo': 'Desaprobó', 'desaprobado': 'Desaprobó', 'Pendiente': 'Pendiente', 'pendiente': 'Pendiente' };
      const estadoFinal = estadoMap[estado] || estado;

      const result = await CalificacionesService.upsertNotaModulo({ id_persona, id_oferta_curso, id_modulo, estado: estadoFinal });
      res.status(200).json({ mensaje: 'Nota registrada/actualizada correctamente', nota: result });
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al registrar/actualizar nota de módulo', error: error.message });
    }
  }

  static async actualizarNota(req, res) {
    try {
      const { id } = req.params;
      const { estado } = req.body || {};
      if (!estado) return res.status(400).json({ mensaje: 'Falta estado' });
      const estadoMap = { 'Aprobó': 'Aprobó', 'Aprobo': 'Aprobó', 'aprobó': 'Aprobó', 'aprobado': 'Aprobó', 'Aprobado': 'Aprobó', 'Desaprobó': 'Desaprobó', 'Desaprobo': 'Desaprobó', 'desaprobado': 'Desaprobó', 'Pendiente': 'Pendiente', 'pendiente': 'Pendiente' };
      const estadoFinal = estadoMap[estado] || estado;
      const nota = await CalificacionesService.actualizarNota(id, { estado: estadoFinal });
      if (!nota) return res.status(404).json({ mensaje: 'Nota no encontrada' });
      res.status(200).json({ mensaje: 'Nota actualizada', nota });
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al actualizar nota de módulo', error: error.message });
    }
  }

  static async eliminarNota(req, res) {
    try {
      const { id } = req.params;
      const ok = await CalificacionesService.eliminarNota(id);
      if (!ok) return res.status(404).json({ mensaje: 'Nota no encontrada' });
      res.status(200).json({ mensaje: 'Nota eliminada' });
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al eliminar nota de módulo', error: error.message });
    }
  }

  static async listarPorModuloOferta(req, res) {
    try {
      const { id_modulo, id_oferta_curso } = req.params;
      const notas = await CalificacionesService.listarNotasPorModuloOferta(Number(id_modulo), Number(id_oferta_curso));
      res.status(200).json({ mensaje: 'Notas por módulo/oferta obtenidas', notas });
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al listar notas por módulo y oferta', error: error.message });
    }
  }

  static async listarTodas(req, res) {
    try {
      const notas = await CalificacionesService.listarTodasNotasModulo();
      res.status(200).json({ mensaje: 'Listado general de notas de módulo', notas });
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al listar todas las notas de módulo', error: error.message });
    }
  }

  static async obtenerPorId(req, res) {
    try {
      const { id } = req.params;
      const nota = await CalificacionesService.obtenerNotaPorId(id);
      if (!nota) {
        return res.status(404).json({ mensaje: 'Nota de módulo no encontrada' });
      }
      return res.status(200).json({ mensaje: 'Nota de módulo encontrada', nota });
    } catch (error) {
      console.error('Error obtenerPorId:', error);
      return res.status(500).json({ mensaje: 'Error al obtener la nota de módulo', error: error.message });
    }
  }
}

module.exports = CalificacionesController;