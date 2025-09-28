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
        const { id_curso_oferta, id_persona } = req.body;
        try {
            const nuevaMatricula = await matricularCursoService.crearMatricula(id_curso_oferta, id_persona);
            res.status(201).json(nuevaMatricula);
        } catch (error) {
            res.status(400).json({ message: "Error al crear matrícula", error: error.message });
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

    static async obtenerModuloPersona(req, res){
        const {id_persona, id_oferta_curso}=req.params;
        try{
            const modulos=await matricularCursoService.obtenerModulosPorPersona(id_persona, id_oferta_curso);
            res.status(200).json({mensaje:"Modulo traido correctamente", modulos:modulos})
        }catch(error){
            res.status(400).json({mensaje:"Error en la consulta", error:error.message})
        }
    }

}
module.exports = MatricularCursoController;