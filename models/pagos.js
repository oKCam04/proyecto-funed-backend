'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pagos extends Model {
    static associate(models) {
      // define association here
    }
  }
  pagos.init({
    idEstudiante: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fechaPago: {
      type: DataTypes.DATE,
      allowNull: false
    },
    monto: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    metodoPago: {
      type: DataTypes.STRING,
      allowNull: false
    },
    financiamiento: {
      type: DataTypes.ENUM('Si','No'),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'pagos',
  });
  return pagos;
}; 