'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      usuario.belongsTo(models.persona, {
        foreignKey: 'idPersona',
        as: 'persona'
      });
    }
  }
  usuario.init({
    idPersona: DataTypes.INTEGER,
    nombreUsuario: DataTypes.STRING,
    contrasena: DataTypes.STRING,
    fechaCreacion: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'usuario',
  });
  return usuario;
};