const ModuloDocenteService = require('../services/moduloDocenteService');

class ModuloDocenteController {
  static async obtenerPorOfertaCurso(req, res) {
    const { id_oferta_curso } = req.params;
    try {
      const asignaciones = await ModuloDocenteService.listarPorOfertaCurso(id_oferta_curso);
      res.status(200).json({ mensaje: 'Asignaciones obtenidas correctamente', asignaciones });
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al obtener módulo-docente por oferta de curso', error: error.message });
    }
  }

  static async crearAsignacion(req, res) {
    try {
      console.log('[ModuloDocente] POST /modulo-docente crearAsignacion body:', req.body);
      const { id_modulo, id_docente, id_oferta_curso } = req.body;
      if (!id_modulo || !id_docente || !id_oferta_curso) {
        return res.status(400).json({ mensaje: 'id_modulo, id_docente e id_oferta_curso son requeridos' });
      }
      const asignacion = await ModuloDocenteService.crearAsignacion({ id_modulo, id_docente, id_oferta_curso });
      console.log('[ModuloDocente] Asignación creada:', asignacion?.id, 'oferta:', asignacion?.id_oferta_curso, 'modulo:', asignacion?.id_modulo, 'docente:', asignacion?.id_docente, 'notasResumen:', asignacion?.notasResumen);
      return res.status(201).json({ mensaje: 'Asignación creada', asignacion });
    } catch (error) {
      return res.status(500).json({ mensaje: 'Error al crear asignación módulo-docente', error: error.message });
    }
  }
}

module.exports = ModuloDocenteController;