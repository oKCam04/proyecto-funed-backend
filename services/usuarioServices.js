const {usuario}=require('../models');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
require("dotenv").config();

class UsuarioService{

    static async register(idPersona, email, password){
        const hashed= await bcrypt.hash(password,10);
        return usuario.create({idPersona, email, password: hashed})  
    }

    static async login( email, password){
        const user=await usuario.findOne({where:{email}});
        if(!user || !(await bcrypt.compare(password, user.password))){
            throw new Error('Invalid email or password');
        }   
        const token=jwt.sign({id:user.id, email: user.nombreUsuario}, process.env.JWT_SECRET, {expiresIn:'3h'});
        return {token: token, user:user}
    }

}

module.exports = UsuarioService;