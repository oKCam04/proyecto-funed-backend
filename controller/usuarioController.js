const UserService=require("../services/usuarioServices");
const EmailService = require("../services/emailService");

class UsuarioController {
    static async register(req, res){
        try{
            const {id_persona, email, password} = req.body;
            await UserService.register(id_persona, email, password);
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
    static async getAll(req, res){
        try{
            const usuarios= await UserService.getAll();
            res.json(usuarios);
        }catch(error){
            res.status(500).json({error: error.message});
        }
    }

    static async actualizarUsuario(req, res){
        const {id}= req.params;
        const {id_persona, email, password}=req.body;
        try{
            const cursoActualizado= await UserService.update(id, id_persona, email, password);
            res.json(cursoActualizado)
        }catch(error){
            console.log(error)
            res.status(500).json({message:"Error al actualizar user"})
        }
    }

    // Recuperación de contraseña: genera temporal, envía correo y actualiza hash
    static async forgotPassword(req, res){
        try{
            const email = req.body?.email || req.body?.correo;
            if(!email) return res.status(400).json({ message: 'email es requerido' });

            // Buscar usuario para obtener nombre desde persona (opcional)
            const { usuario, persona } = require('../models');
            const user = await usuario.findOne({ where: { email }, include: [{ model: persona, as: 'persona', attributes: ['nombre'] }] });
            if(!user) return res.status(404).json({ message: 'Usuario no encontrado' });

            // Generar contraseña temporal segura
            const tempPassword = Math.random().toString(36).slice(-10);

            // Enviar correo con la contraseña temporal
            try {
                await EmailService.sendTemporaryPassword({
                    to: email,
                    nombre: user?.persona?.nombre || '',
                    tempPassword,
                });
            } catch (err) {
                return res.status(500).json({ message: 'No se pudo enviar el correo de recuperación', error: err?.message });
            }

            // Actualizar contraseña (hasheada) por email
            await UserService.updatePasswordByEmail(email, tempPassword);

            return res.json({ message: 'Contraseña temporal enviada al correo y actualizada' });
        } catch (error) {
            res.status(500).json({ message: 'Error en recuperación de contraseña', error: error.message });
        }
    }
}

module.exports = UsuarioController;