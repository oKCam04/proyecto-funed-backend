'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class financiamiento extends Model {
    static associate(models) {
      // define association here
    }
  }
  financiamiento.init({
    idPago: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cuotas: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    valorFinal: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    valorAbonado: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    numeroCuota: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'financiamiento',
  });
  return financiamiento;
}; 