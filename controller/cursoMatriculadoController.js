const matricularCursoService = require('../services/cursoMatriculadoService');

class MatricularCursoController {
    static async listarMatriculas(req, res) {
        try {
            const matriculasLista = await matricularCursoService.listarMatriculas();
            res.json(matriculasLista);
        } catch (error) {
            res.json({ message: "Error al listar matrículas", error:error.message });
        }
    }

    static async crearMatricula(req, res) {
        const { idOfertaCurso, personaInscrita } = req.body;
        try {
            const nuevaMatricula = await matricularCursoService.crearMatricula(idOfertaCurso, personaInscrita);
            res.json(nuevaMatricula);
        } catch (error) {
            res.json({ message: "Error al crear matrícula" });
        }
    }

    static async eliminarMatricula(req, res) {
        const { id } = req.params;
        try {
            await matricularCursoService.eliminarMatricula(id);
            res.json({ mensaje: "Matrícula eliminada exitosamente" });
        } catch (error) {
            res.json({ message: "Error al eliminar matrícula" });
        }
    }

    static async cursoMatriculadoPersona(req, res){
        const {id}=req.params;
        try{
            const cursos=await matricularCursoService.cursoMatriculadoPersona(id);
            
            res.status(200).json({mensaje:"Cursos traidos correctamente", cursos:cursos })
        }catch(error){
            res.status(400).json({mensaje:"Error en la consulta controller", error:error.message})
        }
    }
}
module.exports = MatricularCursoController;