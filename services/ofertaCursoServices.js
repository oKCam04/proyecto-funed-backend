const {ofertaCurso} =require('../models');

class OfertaCursoService {
    static async listarOfertasCursos() {
        try {
            return await ofertaCurso.findAll();
        } catch (error) {
            throw new Error("Error al listar ofertas de cursos: " + error.message);
        }
    }

    static async crearOfertaCurso(titulo, descripcion, fechaInicio, fechaFin, estado) {
        try {
            return await ofertaCurso.create({ titulo, descripcion, fechaInicio, fechaFin, estado });
        } catch (error) {
            throw new Error("Error al crear oferta de curso: " + error.message);
        }
    }

    static async actualizarOfertaCurso(id, titulo, descripcion, fechaInicio, fechaFin, estado) {
        try {
            const oferta = await ofertaCurso.findByPk(id);
            if (!oferta) throw new Error("Oferta de curso no encontrada");
            return await oferta.update({ titulo, descripcion, fechaInicio, fechaFin, estado });
        } catch (error) {
            throw new Error("Error al actualizar oferta de curso: " + error.message);
        }
    }

    static async eliminarOfertaCurso(id) {
        try {
            const oferta = await ofertaCurso.findByPk(id);
            if (!oferta) throw new Error("Oferta de curso no encontrada");
            return await oferta.destroy();
        } catch (error) {
            throw new Error("Error al eliminar oferta de curso: " + error.message);
        }
    }
}

module.exports = OfertaCursoService;