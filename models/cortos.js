'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cortos extends Model {
    static associate(models) {
      // define association here
    }
  }
  cortos.init({
    idCurso: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    certificadoEstudio: {
      type: DataTypes.STRING,
      allowNull: false
    },
    documentoIdentidad: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'cortos',
  });
  return cortos;
}; 