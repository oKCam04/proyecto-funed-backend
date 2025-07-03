'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pago extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      pago.belongsTo(models.persona, {
        foreignKey: 'idPersona',
        as: 'persona'
      });
      pago.belongsTo(models.cursoMatriculado, {
        foreignKey: 'idCursosMatriculados',
        as: 'cursoMatriculado'
      });
    }
  }
  pago.init({
    idPersona: DataTypes.INTEGER,
    idCursosMatriculados: DataTypes.INTEGER,
    formaPago: DataTypes.STRING,
    monto: DataTypes.INTEGER,
    estado: DataTypes.STRING,
    fechaPago: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'pago',
  });
  return pago;
};