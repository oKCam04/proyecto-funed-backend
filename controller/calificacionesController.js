const CalificacionesService = require('../services/calificacionesService');

class CalificacionesController {
  static async obtenerPorOferta(req, res) {
    const { id_oferta_curso } = req.params;
    try {
      const calificaciones = await CalificacionesService.listarPorOfertaCurso(id_oferta_curso);
      res.status(200).json({ mensaje: 'Calificaciones obtenidas correctamente', calificaciones });
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al obtener calificaciones por oferta de curso', error: error.message });
    }
  }
}

module.exports = CalificacionesController;