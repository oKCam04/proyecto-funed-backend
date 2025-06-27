'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class horarios extends Model {
    static associate(models) {
      // define association here
    }
  }
  horarios.init({
    idModulo: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    diaSemana: {
      type: DataTypes.STRING,
      allowNull: false
    },
    horaInicio: {
      type: DataTypes.STRING,
      allowNull: false
    },
    horaFin: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'horarios',
  });
  return horarios;
}; 