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
}

module.exports = CalificacionesController;