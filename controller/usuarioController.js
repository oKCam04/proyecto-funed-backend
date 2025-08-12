const UserService=require("../services/usuarioServices");

class UsuarioController {
    static async register(req, res){
        try{
            const {idPersona, email, password} = req.body;
            const user= await UserService.register(idPersona, email, password);
            res.json("Usuario registrado correctamente");
        }catch(error){
            res.status(500).json({error: error.message});
        }
    }

    static async login(req, res){
        try{
            const {email, password} = req.body;
            const resultado= await UserService.login(email, password);
            res.json(resultado);

        }catch(error){
            res.status(401).json({error: error.message}); 
        }
    }
}

module.exports = UsuarioController;