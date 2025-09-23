const {ofertaCurso, docente, curso, persona} =require('../models');

class OfertaCursoService {
    static async listarOfertasCursos() {
        try {
            return await ofertaCurso.findAll({include: [
                {model: docente, as: 'docentes', attributes: ['id'], include:[{model:persona, as:'persona', attributes:['id','nombre']}] },
                {model: curso, as: 'curso', attributes: ['id', 'nombreCurso']}
            ]});
        } catch (error) {
            console.log(error.message);
            throw new Error("Error al listar ofertas de cursos: " + error.message);
        }
    }

    static async crearOfertaCurso(codigoCurso, idCurso, fechaInicioCurso, fechaFinCurso, horario, cupos, idDocente,precio ) {
        try {
            return await ofertaCurso.create({ codigoCurso, idCurso, fechaInicioCurso, fechaFinCurso, horario, cupos, idDocente,precio  });
        } catch (error) {
            throw new Error("Error al crear oferta de curso: " + error.message);
        }
    }

    static async actualizarOfertaCurso(id ,codigoCurso, idCurso, fechaInicioCurso, fechaFinCurso, horario, cupos, idDocente,precio ) {
        try {
            const oferta = await ofertaCurso.findByPk(id);
            if (!oferta) throw new Error("Oferta de curso no encontrada");
            return await oferta.update({ codigoCurso, idCurso, fechaInicioCurso, fechaFinCurso, horario, cupos, idDocente,precio  });
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

    static async obtenerOfertaCursoPorId(id) {
        try {
            const oferta = await ofertaCurso.findByPk(id, {
                include: [
                    { model: docente, as: 'docentes', attributes: ['id'],include:[{model:persona, as:'persona', attributes:['id','nombre']}] },
                    { model: curso, as: 'curso', attributes: ['id', 'nombreCurso','duracion','temario','tipoCurso'] }
                ]
            });
            if (!oferta) throw new Error("Oferta de curso no encontrada");
            return oferta;
        } catch (error) {
            console.log(error.message);
            throw new Error("Error al obtener oferta de curso: " + error.message);
        }
    }
}

module.exports = OfertaCursoService;