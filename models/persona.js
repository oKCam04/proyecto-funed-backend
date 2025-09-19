'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class persona extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      persona.hasMany(models.docente, {
        foreignKey: 'idPersona',
        as: 'docentes'
      });
      persona.hasMany(models.usuario, {
        foreignKey: 'idPersona', 
        as: 'usuarios' });
      persona.hasMany(models.inscripcion, {
        foreignKey: 'personaInscrita',
        as: 'inscripciones'
      });
      persona.hasMany(models.cursoMatriculado, {
        foreignKey: 'idPersona',
        as: 'cursosMatriculados'
      });
      persona.hasMany(models.certificado, {
        foreignKey: 'idPersona',
        as: 'certificados'
      });
      persona.hasMany(models.pago,{
        foreignKey: 'idPersona',
        as: 'pagos'
      })
    }
  }
  persona.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    numero_identificacion: DataTypes.STRING,
    tipo_identificacion: DataTypes.ENUM('Cédula','Tarjeta de identidad'),
    fecha_nacimiento: DataTypes.DATE,
    telefono: DataTypes.STRING,
    correo: DataTypes.STRING,
    rol: DataTypes.ENUM('Administrador', 'Usuario','Estudiante')
  }, {
    sequelize,
    modelName: 'persona',
    tableName: 'personas',
    timestamps: true,
    createdAt: 'created_at', 
    updatedAt: 'updated_at'
    
  });
  return persona;
};