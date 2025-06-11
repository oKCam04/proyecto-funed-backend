'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class personas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  personas.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    numero_identificacion: DataTypes.STRING,
    tipo: DataTypes.STRING,
    fecha: DataTypes.STRING,
    telefono: DataTypes.STRING,
    correo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'personas',
  });
  return personas;
};