'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class notas extends Model {
    static associate(models) {
      // define association here
    }
  }
  notas.init({
    idEstudiante: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    idModulo: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nota: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: false
    },
    fechaNota: {
      type: DataTypes.DATE,
      allowNull: false
    },
    estado: {
      type: DataTypes.ENUM('Aprobado','Reprobado'),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'notas',
  });
  return notas;
}; 