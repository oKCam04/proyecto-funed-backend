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
}

module.exports = ModuloDocenteController;