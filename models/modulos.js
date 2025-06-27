'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class modulos extends Model {
    static associate(models) {
      // define association here
    }
  }
  modulos.init({
    idCurso: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nombreModulo: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'modulos',
  });
  return modulos;
}; 